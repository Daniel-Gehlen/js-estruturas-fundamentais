// Weather forecast app
let getCurrentTemperature = new Promise((resolve, reject) => {
    // Simulação de requisição assíncrona
    let temperature = Math.random() * 40; // Gera uma temperatura aleatória entre 0 e 40 graus
    // Verifica se a temperatura é aceitável
    if (temperature < 35) {
        resolve(`Temperatura atual: ${temperature.toFixed(2)}ºC`);
    } else {
        reject(`Erro: Temperatura muito alta para previsão confiável`);
    }
});

// Utilizando a promessa
getCurrentTemperature

.then((result) => {
    console.log(result);
})

.catch((erro) => {
    console.log(erro);
});