/* let config = {
    maxPlayers: 4,
    startingLevel: 1,
    difficulty: 'medium'
};

let handler = {
    get: function (target, prop) {
        return prop in target ? target[prop] : 'Inexitent configuration. Try again, please.';

    }
};

let secureConfig = new Proxy(config, handler);

console.log(secureConfig.maxPlayers);
console.log(secureConfig.startingLevel);
console.log(secureConfig.difficulty);
console.log(secureConfig.invalidProperty);*/