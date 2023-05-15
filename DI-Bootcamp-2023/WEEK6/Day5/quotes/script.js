const quotes = [
    { id: 0, author: "Author 1", quote: "Quote 1", likes: 0 },
    { id: 1, author: "Author 2", quote: "Quote 2", likes: 0 },
    { id: 2, author: "Author 3", quote: "Quote 3", likes: 0 },
    { id: 3, author: "Author 4", quote: "Quote 4", likes: 0 },
    { id: 4, author: "Author 5", quote: "Quote 5", likes: 0 }
  ];
  
  let previousQuoteId = -1; // To keep track of the previously displayed quote id
  let currentQuoteIndex = 0; // To keep track of the current quote index
  
  function getRandomQuote() {
    let randomQuote;
    do {
      randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (randomQuote.id === previousQuoteId); // Loop until a new quote is obtained
  
    previousQuoteId = randomQuote.id; // Store the current quote id
  
    return randomQuote;
  }
  
  function displayRandomQuote() {
    const quoteSection = document.getElementById("quote-section");
    const generateQuoteBtn = document.getElementById("generate-quote-btn");
  
    const quote = getRandomQuote();
  
    // Create elements to display the quote
    const quoteElement = document.createElement("p");
    const authorElement = document.createElement("p");
  
    quoteElement.textContent = `"${quote.quote}"`;
    authorElement.textContent = `- ${quote.author}`;
  
    // Clear existing quote
    quoteSection.innerHTML = "";
  
    // Append quote and author elements to the section
    quoteSection.appendChild(quoteElement);
    quoteSection.appendChild(authorElement);
  
    generateQuoteBtn.disabled = true; // Disable button to prevent consecutive identical quotes
  
    // Enable button after a delay to allow for visual change
    setTimeout(function () {
      generateQuoteBtn.disabled = false;
    }, 500);
  
currentQuoteIndex = quotes.findIndex((q) => q.id === quote.id);
  }
