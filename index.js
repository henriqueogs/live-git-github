const express = require('express');

const app = express()

app.get('/teste', (req, rest) => {
        return  rest.json({ message: 'Hello Word'})
});

app.listen(3333);