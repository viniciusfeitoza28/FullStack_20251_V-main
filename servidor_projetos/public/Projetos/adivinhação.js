let r = Math.random()*100
let i = Math.floor(r)
console.log(i)



function number(){
    let num = parseInt(document.getElementById("number1").value)
    
  
    if (num === i){
        document.getElementById('h2_1').style.setProperty("background-color","green")
        document.getElementById('h2_1').innerHTML = 'Número igual!'
    }
    else if(num < i || num > i){
        document.getElementById('h2_1').style.setProperty("background-color","red")

        document.getElementById('h2_1').innerHTML = 'Número não é igual!'

    }
}
