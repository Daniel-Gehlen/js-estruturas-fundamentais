// Definindo um array
let myArray = [1, 2, 3, 'text', true];

// Acessando e exibindo os elementos do array
console.log('Array elements: ');
for (let i = 0; i < myArray.length; i++) {
    console.log(`Index ${i}: ${myArray[i]}`);
}

let pessoas = [
    { name: 'Daniel', age: 38, city: 'Montenegro' },
    { name: 'Pedro', age:30, city: 'Porto' }
];

console.log('People informations: ');
for (let i = 0; i < pessoas.length; i++) {
    console.log(`Name; ${pessoas[i].name}, Age: ${pessoas[i].age}, City: ${pessoas[i].city}`);
}

let booleans = [true, false, false, true];
    console.log('Array Booleans: ')
for (let i = 0; i < booleans.length; i++) {
    console.log(`Index ${i}: ${booleans[i]}`);
}

let nestedArrays = [[1, 2, 3, 4, 5, 6, 7], ['A', 'B', 'C', 'D', 'E', 'F', 'G']];
    console.log('Nested Arrays: ')
for (let i = 0; i < nestedArrays.length; i++){
    console.log(`Index ${i}: ${nestedArrays[i]}`);
}

let functionArray = [function() {console.log('Hello');}, function() {console.log('World!');}];
    console.log('Function Arays:');
for (let i = 0; i < functionArray.length; i++){
    console.log(`Index ${i}: ${functionArray[i]}`);
}

let mixedValues = [1, 'text', true, null, undefined, NaN];
 console.log('Mixed Values:');
 for (let i = 0; i < mixedValues.length; i++){
    console.log(`Index ${i}: ${mixedValues[i]}`);
 }

 let regularExpressions = [/patern1/, /patern2/];
    console.log('Regular Expressions:')
for (let i = 0; i < regularExpressions.length; i++){
    console.log(`Index ${i}: ${regularExpressions[i]}`);
}