//window.alert("Hello World")
console.log("Hello World")

//let nome = prompt("Qual seu nome?");
//console.log(nome)

console.log("While");
let i = 0;
while(i < 10){
    //i++;
    //i = i + 1;
    i += 1;
}
console.log("for");
for(let i = 0; i < 10; i++){
    console.log(i);
}

//Exercicio 1:
console.log("Exercicio 1");
for(let i = 1;i < 100; i += 2){
    console.log(i);
}

//Exercicio 2:
console.log("Exercicio 2");
for(let i = 5;i <= 500; i += 5){
    console.log(i);
}

//Exercicio 3:
console.log("Exercicio 3");
let x = parseInt(prompt("Digite o número inteiro: "));
if(x < 0){
    console.log("Numero invalido")
}
for(let i = x; i >= 0; i--){
    console.log(i);
}

//Exercicio 4:
console.log('Exercicio4');
let num = parseInt(prompt("Digite o número inteiro: "));
if(num < 0){
    console.log("Numero invalido")
}
let mult = 1;
for(let i = num; i > 0; i--){
    mult *= i;
    console.log(i,mult); 
}