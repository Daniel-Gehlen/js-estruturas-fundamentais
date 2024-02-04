let db;

// Abre ou cria o banco de dados 'myDatabase' com a versão 1
let request = indexedDB.open('My database', 1);

// Manipula a criação ou atualização do banco de dados
request.onupgradeneeded = function (event) {
    db = event.target.result;
}
// Cria uma loja de objetos chamada 'tasks' com 'id' como chave primária
let objectStore = db.createObjectStore('tasks', { keyPath: 'id' });

// Adiciona um índice para facilitar a pesquisa por título da tarefa
objectStore.createIndex('title', 'title', { unique: false });

// Manipula o sucesso da abertura do banco de dados
request.onsuccess = function (event) {
    db = event.target.result;
}

// Realiza operações no banco de dados, como adicionar e recuperar tarefas
addTask({ id: 1, title: 'To complet tutorial', completed: false });
addTask({ id: 2, title: 'Code review', completed: false });

getTasks(); // Recupera e exibe as tarefas

// Função para adicionar uma tarefa ao banco de dados
function addTask(task) {
    let transaction = db.transaction(['tasks'], 'readwrite');
    let objectStore = transaction.objectStore('tasks');
    let request = objectStore.add(task);

    request.onsuccess = function () {
        console.log('succes add task');
    }
};

request.onerror = function () {
    console.error('error add task');
}

// Função para recuperar e exibir todas as tarefas do banco de dados
function getTasks() {
    let transaction = db.transaction(['tasks'], 'readwrite');
    let objectStore = transaction.objectStore('tasks');
    let request = objectStore.add(task);

    request.onsuccess = function (event) {
        let cursor = event.target.result;

        if (cursor) {
            console.log(`ID: ${cursor.value.id}, Title: ${cursor.value.title}, Completed: ${cursor.value.completed}`);
            cursor.continue();
        } else{
            console.log('Tasks final');
        }
    };
    request.onerror = function() {
        console.error('Error when recover tasks');
    }
}