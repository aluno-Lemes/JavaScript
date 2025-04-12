
console.log('Boas vindas');

//--------------//--------------//--------------//--------------//

let nome = 'Lucas';
console.log(`Ola ${nome}`);

//--------------//--------------//--------------//--------------//

let nome1 = 'Lucas';
alert (`Olá ${nome1}`);

//--------------//--------------//--------------//--------------//

let progLang = prompt('Qual a linguagem de programação que você mais gosta?');
console.log(progLang);

//--------------//--------------//--------------//--------------//
let valor1 = 843;
let valor2 = 476;
let resultado = valor1 + valor2;

console.log( `A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

//--------------//--------------//--------------//--------------//

let valor_1 = 2135;
let valor_2 = 865;
let resultado0 = valor1 - valor2;

console.log( `A diferença de ${valor_1} e ${valor_2} é igual a ${resultado0}.`);

//--------------//--------------//--------------//--------------//

 let idade = prompt('Digite a sua idade');

 if (idade >= 18 ) {
    alert('Você é MAIOR de Idade!');
 }else{
    alert('Você é MENOR de Idade');
 }

 //--------------//--------------//--------------//--------------//

 let numero = prompt('Digite um numero');

 if (numero > 0) {
    alert('Este numero é positivo');
 }if(numero < 0) {
    alert('Este numero é Negativo');
 }if(numero == 0){
    alert('O numero escolhido é 0');
 }

 //--------------//--------------//--------------//--------------//

let numero0 = 1;

while (numero0 < 11) {
    console.log(numero0)
    numero0++;
}

//--------------//--------------//--------------//--------------//

let nota = 5;

if (nota >= 7) {
    console.log('Aprovado!');
}else{
    console.log('Reprovado!');
}

//--------------//--------------//--------------//--------------//

let num = Math.random() * 1 ;
console.log(num);

//--------------//--------------//--------------//--------------//

let num1 = parseInt(Math.random() * 10 + 1 );
console.log(num1);

//--------------//--------------//--------------//--------------//

let num2 = parseInt(Math.random() * 1000 + 1 );
console.log(num2);
