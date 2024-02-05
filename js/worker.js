//Web Workers para realizar cálculos em segundo plano:
self.onmessage = (event) => {
    console.log('Message from main:', event.data);


  // Simulando um cálculo intensivo em segundo plano
const result = performHeavyCalculation();

self.postMessage(result);
};

function performHeavyCalculation(){
      // Simulação de um cálculo demorado
    let result = 0;
    for (let i = 0; i < 1000000000; i++){
        result += Math.sqrt(i);
    }
    return result;
}