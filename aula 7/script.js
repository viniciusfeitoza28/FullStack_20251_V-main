let canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')

//retangulo

ctx.beginPath();
ctx.lineWidth = 8;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.fillRect(0,0,70,70);
ctx.strokeRect(70,70,50,50);
ctx.closePath();


// linhas
ctx.beginPath();
ctx.lineWidth = 8;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.moveTo(200,150);
ctx.lineTo(120,120);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 8;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// texto
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'red';
ctx.font = "90px Arial"
ctx.textAlign = "center";
ctx.fillText("Olá",200,350);
ctx.strokeText("Olá",200,350)
ctx.closePath();

//Exercicio 1
let canvas2 = document.getElementById('canvas2')
let ctx2 = canvas2.getContext('2d')

ctx2.beginPath()
ctx2.fillStyle = 'red'
ctx2.fillRect(0,0,70,70);
ctx2.closePath()

ctx2.beginPath()
ctx2.fillStyle = 'blue'
ctx2.fillRect(330,0,70,70)
ctx2.closePath()

ctx2.beginPath()
ctx2.fillStyle = 'yellow'
ctx2.fillRect(0,327,70,70)
ctx2.beginPath()

ctx2.beginPath()
ctx2.fillStyle = 'green'
ctx2.fillRect(330,327,70,70)
ctx2.beginPath()

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'red';
ctx2.moveTo(0,0);
ctx2.lineTo(400,400);
ctx2.stroke();
ctx2.closePath();

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'blue';

ctx2.moveTo(0,400);//'move' a linha do ponto de partida ate as coordenadas
ctx2.lineTo(360,40);//'move' a linha do ponto atual até as coordenadas

ctx2.moveTo(0,400);
ctx2.lineTo(360,40);

ctx2.stroke();
ctx2.closePath();

ctx2.beginPath()
ctx2.lineWidth = 2
ctx2.strokeStyle = 'green'
ctx2.moveTo(0,200)
ctx2.lineTo(400,200)
ctx2.stroke()
ctx2.closePath()

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.strokeStyle = 'green';
ctx2.arc(200,200,50,0*Math.PI,1*Math.PI);
ctx2.stroke()
ctx2.closePath()

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow'
ctx2.strokeStyle = 'green';
ctx2.arc(300,150,30,0*Math.PI,2*Math.PI);
ctx2.fill()
ctx2.stroke()
ctx2.closePath()

ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'yellow'
ctx2.strokeStyle = 'green';
ctx2.arc(99,150,30,0*Math.PI,2*Math.PI);
ctx2.fill()
ctx2.stroke()
ctx2.closePath()