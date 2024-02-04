let myTypeArray = new Int32Array([1, 2, 3, 4, 5]);

// Somando 5 a cada elemento do array
for (let i = 0; i < myTypeArray.length; i++){
    myTypeArray[i] += 5;
}

console.log(myTypeArray);