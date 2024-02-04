// Exemplo de fila
let taskQueue = ['task1', 'task2', 'task2'];

taskQueue.push('newTask'); // Adiciona uma nova tarefa à fila

let nextTask = taskQueue.shift(); // Processa a próxima tarefa na fila

console.log(taskQueue);

// Exemplo de pilha
let historyStack = ['page1', 'page2', 'page3'];
//historyStack.push('newStack');
let visitedPage = historyStack.pop();

console.log(historyStack);



