import express from 'express';

const app = express();

import bodyParser from 'body-parser';

// Middleware para analisar corpos de requisição
app.use(bodyParser.json());

// Simulação de um banco de dados de produtos
let products = [];

// Rota para obter todos os produtos
app.get('/api/products', (req, res) => {
    res.json(products);
});

// Rota para adicionar um novo produto
app.post('/api/products', (req, res) => {
    const newProduct = req.body;
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Rota para atualizar um produto com um ID específico
app.put('api/products/:id', (req, res) => {
    const productId = req.params.id;
    const updatedProduct = req.body;
    for (let i = 0; i < products.length; i++) {
        if (products[i].id === productId) {
            products[i] = updatedProduct;
            return res.status(200).json(updatedProduct);
        }
    }
    res.status(404).send('Product not found.');
});

// Rota para deletar um produto com um ID específico
app.delete('api/products/:id', (req, res) => {
    const productId = req.params.id;
    products = products.filter(product => product.id !== productId);
    res.status(204).send();
});

// Inicializando o servidor
const port = 3000;
app.listen(port, () => {
    console.log(`Server run on port ${port}`);
});

