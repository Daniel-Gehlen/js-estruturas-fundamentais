import { myVariable, multiplayerByTwo } from './module.js';

console.log(`My variable: ${myVariable}`);
console.log(`Multiplayer 10 by 2: ${multiplayerByTwo(10)}`);

//Web Workers para realizar cálculos em segundo plano:
const worker = new Worker('worker.js');

worker.onmessage = (event) => {
    console.log('Message from worker:', event.data);
};

worker.postMessage('Hello World!');

