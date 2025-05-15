const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const startButton = document.getElementById("start");

// canvas so aparece quando da Play
canvas.style.display = "none";

// nave
const nave = {
    x: 280,
    y: 500,
    largura: 50,
    altura: 50,
    img: new Image(),
    velocidade: 7
};

nave.img.src = "nave.webp";

// misseis
const misseis = [];
const velocidadeMissil = 7;

// asteroides e pontuação
const asteroides = [];
const velocidadeAsteroide = 2;
let pontuacao = 0;
let gameOver = false;

// controles
const teclasPressionadas = {};
let jogoRodando = false;

// Classe Asteroide
class Asteroide {
    constructor() {
        this.largura = 30 + Math.random() * 30;
        this.altura = 30 + Math.random() * 30;
        this.x = Math.random() * (canvas.width - this.largura);
        this.y = -this.altura;
        this.velocidadeY = 1 + Math.random() * velocidadeAsteroide; //p fazer a velocidade ser aleatória
        this.img = new Image();
        this.img.src = "asteroide.webp"; 
    }

    atualizar() {
        this.y += this.velocidadeY;
    }

    desenhar() {
        if (this.img.complete) {
            ctx.drawImage(this.img, this.x, this.y, this.largura, this.altura);
        } else {
            ctx.fillStyle = "gray";
            ctx.fillRect(this.x, this.y, this.largura, this.altura);
        }
    }
}

// funções principais
function desenhar() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // desenha nave
    if (nave.img.complete) {
        ctx.drawImage(nave.img, nave.x, nave.y, nave.largura, nave.altura);
    } else {
        ctx.fillStyle = "blue";
        ctx.fillRect(nave.x, nave.y, nave.largura, nave.altura);
    }
    
    desenharMisseis();
    desenharAsteroides();
    
    // Desenha pontuação
    ctx.fillStyle = "white";
    ctx.font = "20px Arial";
    ctx.fillText(`Pontos: ${pontuacao}`, 10, 30);
    
    // mensagem de game over
    if (gameOver) {
        ctx.fillStyle = "red";
        ctx.strokestyle = "black"
        ctx.font = "40px Arial";
        ctx.fillText("GAME OVER", canvas.width/2 - 100, canvas.height - 500);
    }
}

function atualizar() {
    if (!jogoRodando || gameOver) return;
    
    // Movimento da nave
    if (teclasPressionadas['w'] || teclasPressionadas['ArrowUp']) nave.y -= nave.velocidade;
    if (teclasPressionadas['s'] || teclasPressionadas['ArrowDown']) nave.y += nave.velocidade;
    if (teclasPressionadas['a'] || teclasPressionadas['ArrowLeft']) nave.x -= nave.velocidade;
    if (teclasPressionadas['d'] || teclasPressionadas['ArrowRight']) nave.x += nave.velocidade;
    
    // limites da nave
    nave.x = Math.max(0, Math.min(canvas.width - nave.largura, nave.x));
    nave.y = Math.max(0, Math.min(canvas.height - nave.altura, nave.y));
    
    // atualiza mísseis
    for (let i = misseis.length - 1; i >= 0; i--) {
        misseis[i].y -= velocidadeMissil;
        if (misseis[i].y < 0) {
            misseis.splice(i, 1);
        }
    }
    
    // atualiza
    for (let i = asteroides.length - 1; i >= 0; i--) {
        asteroides[i].atualizar();
        
        // se o asteroide sair do canvas gameover
        if (asteroides[i].y > canvas.height) {
            // asteroides.splice(i, 1);
            gameOver = true;
        }
        // se o asteroide bater na nave
        if (colisao(nave, asteroides[i])) {
            gameOver = true;
        }
    }
    
    verificarColisoes();
}

function desenharMisseis() {
    ctx.fillStyle = "red";
    misseis.forEach(missil => {
        ctx.fillRect(missil.x, missil.y, missil.largura, missil.altura);
    });
}

function desenharAsteroides() {
    asteroides.forEach(asteroide => {
        asteroide.desenhar();
    });
}

function atirar() {
    if (!jogoRodando || gameOver) return;
    
    misseis.push({
        x: nave.x + nave.largura/2 - 3,
        y: nave.y,
        largura: 6,
        altura: 15
    });
}

function criarAsteroide() {
    if (jogoRodando && !gameOver && Math.random() > 0.5) {
        asteroides.push(new Asteroide());
    }
}

//colisoes

function verificarColisoes() {
    for (let i = misseis.length - 1; i >= 0; i--) {
        for (let j = asteroides.length - 1; j >= 0; j--) {
            if (colisao(misseis[i], asteroides[j])) {
                asteroides.splice(j, 1);
                misseis.splice(i, 1);
                pontuacao += 10;
                break;
            }
        }
    }
}

function colisao(obj1, obj2) {
    return obj1.x < obj2.x + obj2.largura &&
           obj1.x + obj1.largura > obj2.x &&
           obj1.y < obj2.y + obj2.altura &&
           obj1.y + obj1.altura > obj2.y;
}


// controles
document.addEventListener('keydown', (event) => {
    const tecla = event.key.toLowerCase();
    teclasPressionadas[tecla] = true;
    
    if (tecla === ' ' && !gameOver) {
        atirar();
    }
});

document.addEventListener('keyup', (event) => {
    teclasPressionadas[event.key.toLowerCase()] = false;
});

// gameLoop
function gameLoop() {
    if (!jogoRodando) return;
    
    atualizar();
    desenhar();
    requestAnimationFrame(gameLoop);
}


//função que inicia
function IniciaGame() {
    jogoRodando = true;
    gameOver = false;
    pontuacao = 0;
    misseis.length = 0;
    asteroides.length = 0;
    startButton.style.display = "none";
    canvas.style.display = "block";
    
    // posicao q a nave nasce
    nave.x = 280;
    nave.y = 500;
    
    // inicia a geração de asteroides
    setInterval(criarAsteroide, 300);
    //se o botao der erro mas a nave iniciar o jogo inicia de qualquer maneira com o gameLoop
    if (nave.img.complete) {
        gameLoop();
    } else {
        nave.img.onload = gameLoop;
    }
}
