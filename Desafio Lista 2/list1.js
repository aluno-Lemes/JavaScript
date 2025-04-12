let dia = prompt('Que dia da semana é hoje?');

const fimDeSemana = [];
fimDeSemana.push( 'sabado'||'Sabado'||'Domingo'||'domingo');
console.log (fimDeSemana);

if (dia == fimDeSemana) {
    alert ('Tenha um bom fim de semana');
} else {
    alert ('Tenha uma otima semana');
}

//-------------//-------------//-------------//-------------//

let numero = prompt('digite um numero');

if (numero > 0) {
    alert('O seu numero é positivo!');
}if (numero < 0){
    alert('O seu numero é negativo!')
}

//-------------//-------------//-------------//-------------//

let pontos = prompt('De pontos ao seu jogador');

if (pontos >= 100) {
    alert ('Parabéns, você venceu!');
} else {
    alert ('Tente novamente para ganhar.');
}

//-------------//-------------//-------------//-------------//

let saldo = 5234;

alert ('O saldo da sua conta atualmente é de R$:' + saldo + ' Reais');

//-------------//-------------//-------------//-------------//

let nome = prompt(' Por favor insira seu nome: ');

alert('Seja muito bem vindo ' + nome);