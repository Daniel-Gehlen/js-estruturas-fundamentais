// Código do servidor
const EventEmitter = require('event');
const myEmitter = new EventEmitter();

// Lógica para lidar com novas mensagens
myEmitter.on('New message', (message) => {
    console.log(`New message received: ${message}`);
});

// Simulação de uma nova mensagem recebida
function receivedNewMessage(message) {
    myEmitter.emit('New message', (message));
}

// Código do cliente (pode ser em outro arquivo)
// Simulação de envio de nova mensagem pelo cliente
const newMessageClient = 'Hellho! How are everybody?';
receivedNewMessage(newMessageClient);