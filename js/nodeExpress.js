import express from 'express';

const app = express();

const port = 3000;

// Rota principal
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// Rota adicional
app.get('/about', (req, res) => {
    res.send('This is a simple express exemple.');
});

app.listen(port,() => {
    console.log(`Server run on https://localhost/${port}`);
});

