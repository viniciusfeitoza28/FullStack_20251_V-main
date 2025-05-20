let p1 = document.getElementById('p1').innerHTML
console.log(p1)
document.getElementById('p1').innerHTML = 'Olá Mundo'

//Exemplo 1:
/*let nome = prompt('Digite seu nome: ')
let idade = parseInt(prompt('Digite sua idade: '))
let ano = parseInt(prompt('Digite o ano atual: '))
let nasc = ano - idade
let resultado = 'Olá '+nome+',seu ano de nascimento é: '+nasc
document.getElementById('ex1').innerHTML = resultado
*/

//Exemplo de função:
function imprimeMensagemm(msg){
    console.log(msg)
}

imprimeMensagemm('Mensagem 1')
imprimeMensagemm('Mensagem 2')
imprimeMensagemm('Mensagem 3')

//Exemplo de função soma:
function soma(a,b){
    return a + b
}
let c = soma(3,4)
console.log(
    'A soma de '+3+' e '+4+
    ' = '+c
)

//Exemplo de função mult:
function mult(a,b){
    return a * b

}

//Exemplo 2:
function ex2(){
    let num = parseInt(document.getElementById("ex2_in").value)
    console.log('Incrementos até '+num)
    for (let i = 0;i <= num;i++)
        console.log(i)
}

//Exemplo 3:
function ex3(){
    let num = parseInt(document.getElementById('ex3_1').value)
    let num2 = parseInt(document.getElementById('ex3_2').value)
    let result = soma(num,num2)
    console.log(result)
    document.getElementById('ex3_resp').innerHTML = 
    "A soma de "+ num+ ' e ' + num2+ ' é: ' + result
}

//Exemplo 4:
function ex4(){
    let num = parseInt(document.getElementById('ex4_1').value)
    let num2 = parseInt(document.getElementById('ex4_2').value)
    
    let result = 0
    if (num < 0 ||  num2 < 0){
        result = soma(num,num2)
    }
         

     else{
        result = mult(num,num2)
     }
       
    
    document.getElementById('ex4_resp').innerHTML =
    'O resultado é: '+ result
}