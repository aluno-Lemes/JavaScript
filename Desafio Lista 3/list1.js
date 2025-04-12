alert('Lista de desafios 3');
alert('os primeiros 2 desafios aparecem somente no console');

console.log('Printe numeros de 1 a 10');
let numero1 = 1;

while (numero1 < 11) {
    console.log(numero1);
    numero1++;
}

//--------------//--------------//--------------//--------------//
console.log('Printe numeros de 10 a 0');
let numero2 = 10;

while (numero2 > -1) {
    console.log(numero2);
    numero2--;
}

//--------------//--------------//--------------//--------------//
alert("Contagem Regressiva");
let numero3 = prompt('digite a quantidade de numeros a ser contados');

while (numero3 > 0) {
    alert(numero3);
    numero3--;
}
alert('Acabou :) !!!');

//--------------//--------------//--------------//--------------//
alert("Contagem Progressiva");
let qntNumero = prompt('digite a quantidade de numeros a ser contados');
let numero4 = 0;

while (numero4 < qntNumero ) {
    alert(numero4);
    numero4++;
}
alert(numero4++);
alert('Acabou :) !!!');