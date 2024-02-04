let weakMap = new WeakMap();

function associateInformation(user, information) {
    weakMap.set(user, information);
}

let user1 = { id: 1 };
associateInformation(user1, 'Confidential Information: 1');

// Agora, se você não mantiver referências aos usuários...

// usuario1 = null; // Se isso acontecer, o objeto usuário 1 pode ser coletado pelo coletor de lixo

// E se você tentar acessar a informação associada mais tarde:

console.log(weakMap.get(user1));