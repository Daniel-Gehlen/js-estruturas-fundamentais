let customerData = new Map();

// Adiciona informações dos clientes ao Map
customerData.set('client1', { name: 'Lucas', age: 50, city: 'São Paulo' });

// Obtém informações de um cliente específico
let clientID = 'client1';
let clientInformations = customerData.get(clientID);

console.log(`Customer Informations ${clientID}:`, clientInformations);