const express = require('express');

const app = express()

app.get('/teste2', (req, rest) => {
        return  rest.json({ message: 'Hello Word 2'})
});

app.listen(3333);