let myObject = {
    chave1: 'valor1',
    chave2: 42,
    chave3: true
  };

  //Acesso Rápido a Dados
console.log(myObject.chave1);
console.log(myObject.chave2);
console.log(myObject.chave3);

myObject.chave1 = 30;
console.log(myObject);

let config = {
    blackMode: true,
    fontSize: 12,
    language: 'English'
}
 console.log('Config:')
//Iteração sobre Propriedades
for (let key in config) {
    console.log(`${key}: ${config[key]}`);
}