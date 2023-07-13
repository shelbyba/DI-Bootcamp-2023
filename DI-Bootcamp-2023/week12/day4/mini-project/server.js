const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const Parser = require('rss-parser');
const path = require('path');


const app = express();
const parser = new Parser();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Fetch and parse the RSS feed
const fetchRSSFeed = async (rssUrl) => {
  try {
    const feed = await parser.parseURL(rssUrl);
    return feed.items;
  } catch (error) {
    console.error('An error occurred while fetching or parsing the RSS feed:', error);
    throw error;
  }
};

// Route to get all posts from the RSS feed
app.get('/', async (req, res) => {
  try {
    const rssUrl = 'https://thefactfile.org/feed/';
    const posts = await fetchRSSFeed(rssUrl);
    res.render('index', { posts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch or parse RSS feed' });
  }
});

// Route to search posts by title or category
app.post('/search', async (req, res) => {
  try {
    const { searchTerm, searchType } = req.body;
    const rssUrl = 'https://thefactfile.org/feed/';
    const posts = await fetchRSSFeed(rssUrl);

    let searchResults = [];
    if (searchType === 'title') {
      searchResults = posts.filter(post => post.title.toLowerCase().includes(searchTerm.toLowerCase()));
    } else if (searchType === 'category') {
      searchResults = posts.filter(post => post.categories.includes(searchTerm));
    }

    res.render('search', { searchTerm, searchType, searchResults });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch or parse RSS feed' });
  }
});


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'public', 'pages'));

app.use(express.static('./public'));


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


