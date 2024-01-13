// for (inicializador;condição-saída;expressão-final){
//         executar o código
//}

//exercício

let notas = [2,7,5,10,25,50,100,5,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,10,25,50,100,50,20,10];
let total = 0;

for (let repetições = 0; repetições < notas.length; repetições++ ) {
    total = total + notas[repetições]
//reduzir o código
// total += notas[repetições]
}


console.log(`O total do seu dinheiro é ${total}`);