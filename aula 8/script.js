// let carro = {
//     cor: 'green',
//     modelo: 'SUV',
//     marca : 'Toyta',
//     buzina: function(){
//         return 'bii bii';
//     }
// }
// let carro2 = {
//     cor: 'black',
//     modelo: 'SUV',
//     marca : 'Ford',
//     buzina: function(){
//         return 'fom fom';
//     }
// }
class carro{
    constructor(cor,modelo,marca){
    this.cor = cor;
    this.modelo = modelo;
    this.marca = marca;
}
    buzina(){
        return 'bii bii'
    }

    
}

let carro1 = new carro('green','SUV','Toyta');
console.log(carro1);
let carro2 = new carro('Black','SUV','Ford')
console.log(carro2)
// console.log(carro)
// console.log(carro.cor)
// console.log(carro.buzina())
// console.log(carro2.buzina())

// let carros = []
// carros.push(carro)
// carros.push(carro2)
// for (let i = 0; i < carros.length ; i++){
//     console.log(carros[i].buzina())
// }


class retangulo{
    constructor(cor_linha,cor_preenchimento,espessura_linha,x,y,largura,altura){
        this.cor_linha  = cor_linha ;
        this.cor_preenchimento = cor_preenchimento;
        this.espessura_linha = espessura_linha;
        this.x = x;
        this.y = y;
        this.largura = largura;
        this.altura = altura;
    }
    desenhe(cotx){
        cotx.beginPath();
        cotx.lineWidth = this.espessura_linha;
        cotx.fillStyle = this.cor_preenchimento;
        cotx.strokeStyle = this.cor_linha;
        cotx.fillRect(this.x,this.y,this.largura,this.altura);
        cotx.strokeRect(this.x,this.y,this.largura,this.altura);
        cotx.closePath();
    }
}

let canvas = document.getElementById('canvas1')
let ctx1 = canvas1.getContext('2d')

let retangulo_1 = new retangulo('blue','red',3,0,0,20,20)
let retangulo_2 = new retangulo('red','blue',3,200,200,20,20)
let retangulo_3 = new retangulo('red','black',3,200,200,20,20)
retangulo_1.desenhe(ctx1)
retangulo_2.desenhe(ctx1)

function animacao(){
    retangulo_1.x += 1
    ctx1.clearRect(0,0,400,400)
    retangulo_1.desenhe(ctx1)
    retangulo_2.desenhe(ctx1)
    retangulo_3.desenhe(ctx1)
    requestAnimationFrame(animacao)
}
animacao()

document.addEventListener('keydown', function(evento){
    let tecla = evento.key;
    console.log(tecla);
    let velocidade = 20;
    if(tecla == 'ArrowUp')(retangulo_2.y -= velocidade)
    if(tecla == 'ArrowDown')(retangulo_2.y += velocidade)
    if(tecla == 'ArrowLeft')(retangulo_2.x -= velocidade)
    if(tecla == 'ArrowRight')(retangulo_2.x += velocidade)
})

document.addEventListener('mousemove',function(evento){
    let rect = canvas1.getBoundingClientRect()
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);

    retangulo_3.x = x_mouse;
    retangulo_3.y = y_mouse;

})
