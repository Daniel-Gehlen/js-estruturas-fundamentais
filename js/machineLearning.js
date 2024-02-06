// Importando TensorFlow.js
import * as tf from'@tensorflow/tfjs';

// Criando o modelo sequencial
const model = tf.sequencial();

// Adicionando uma camada densa (fully connected) com uma unidade e entrada de tamanho 1
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Compilando o modelo com otimizador 'sgd' (gradiente descendente estocástico) e 
//loss 'meanSquaredError' (erro quadrático médio)

model.compile({ optimizer: 'sgd', loss: 'meanSquaredError' });

// Dados de treinamento: tamanhos das casas (entrada) e preços correspondentes (saída)
const houseSizes = [1, 2, 3, 4];
const housePrices = [2, 4, 6, 8];

// Convertendo os arrays em tensores de duas dimensões
const xs = tf.tensor2d(houseSizes, [4, 1]);
const ys = tf.tensor2d(housePrices, [4, 1]);

// Treinando o modelo com os dados
model.fit(xs, ys, { epochs: 500 }).then(() => {
    // Tamanho da nova casa para prever o preço
    const newHouseSize = 5;

    // Convertendo o tamanho da casa em tensor
    const newHuseSizeTensor = tf.tensor2d([newHouseSize], [1, 1]);

    // Fazendo a previsão do preço da nova casa

    const predictedPriceTensor = model.predict(newHouseSizeTensor);

    // Obtendo o valor previsto como um número JS

    const predictedPrice = predictedPriceTensor.dataSync()[0];

    // Imprimindo o preço previsto
    console.log(`The price previsible of house at width ${newHouseSize} is ${predictedPrice}`);
});



