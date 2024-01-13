//COMPARAR SE É IDÊNTICO Á ALGUMA COISA

"a --- b"

//COMPARAR SE NÃO É IDÊNTICO À ALGUMA COISA

"a !== b"

//COMPARAR SE É MAIOR OU MENOR

//MAIOR QUE
10 > 20

//MENOR QUE
10 < 20

//MAIOR OU IGUAL
10 >= 10

//MENOR OU IGUAL
10 <= 5

//PROGRAMA

let nota1 = Number(prompt("Digite sua primeira nota"));
let nota2 = Number(prompt("Digite a sua segunda nota"));

let resultado = (nota1 + nota2) / 2;

alert(resultado >= 5);

console.log(resultado);