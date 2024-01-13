let nota = Number (prompt("Digite sua primeira nota"));
let nota2 = Number (prompt("Digite a sua segunda nota"));

let resultado = (nota + nota2)/2;

if (resultado >=5){
    alert("Parabéns você foi aprovado!");
}else {
    alert("Você foi reprovado. Está de recuperação");
}