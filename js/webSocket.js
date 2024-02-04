//Vamos imaginar um leilão online simples.
// Cliente 1
const socketClient1 = new WebSocket('wss://example.com/socket');

socketClient1.addEventListener('open', (event) => {
    socketClient1.send('Hello people! I am participating in the auction.');
});

// Cliente 2
const socketClient2 = new WebSocket('wss://example.com/socket');

socketClient2.addEventListener('open', (event) => {
    socketClient2.send('Hi. Let`s go to auction.');
});

socketClient2.addEventListener('message', (event) => {
console.log('Message received by client2:', event.data);
});

// Servidor (pode ser implementado no lado do servidor)
const serverSocket = new WebSocket('wss://example.com/socket');

serverSocket.on('connection', (socket) => {
    console.log('New client conected.');


socket.on('message', (message) => {
    console.log('Message received by client:', message);

    // Aqui você pode adicionar lógica para processar as mensagens, como atualizar o estado do leilão e enviar notificações aos outros clientes.
    // Por exemplo, enviar uma mensagem de oferta a todos os clientes.
    serverSocket.client.forEach((client) => {
        if (client !== socket && client.readyState === WebSocket.OPEN){
            client.send(`New offer received:, ${message}`);
        }
    });
  });
});

    
