const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.json({ 
        firstname: 'John',
        lastname: 'Doe'
    });
})

app.listen(8080, () => console.log('Example app listening on port 8080!'));