function* myGenerator(){
    yield 10; // Pontos ganhos ao avançar de nível
    yield 0; // Valor padrão quando não há mais níveis
}

function simulateGame(){
    let totalPoints = 0;
    let gen = myGenerator();

    for (let i = 1; i<=5; i++){
        let pointsWin = gen.next().value || 0;
        totalPoints += pointsWin;
        if (Math.random() < 0.5 && i < 5){
            console.log(`Player advanced to level ${i}. Total points: ${totalPoints}`);
        }else{
            console.log(`Player decided doesn't advanced to level ${i}. Total points: ${totalPoints}`);
        }
}

console.log(`Total points at final: ${totalPoints}`);

}

simulateGame();

