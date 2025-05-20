const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const img = new Image();
img.src = 'Bola.png'; 

const imgWidth = 50;
const imgHeight = 50;


let x = canvas.width / 2;
let y = canvas.height / 2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, x - imgWidth / 2, y - imgHeight / 2, imgWidth, imgHeight);
}


document.addEventListener('mousemove', function(event) {
    const rect = canvas.getBoundingClientRect();
    let mouseX = event.clientX - rect.left;
    let mouseY = event.clientY - rect.top;

    
    mouseX = Math.max(imgWidth / 2, Math.min(mouseX, canvas.width - imgWidth / 2));
    mouseY = Math.max(imgHeight / 2, Math.min(mouseY, canvas.height - imgHeight / 2));

    x = mouseX;
    y = mouseY;
    draw();
});

img.onload = draw;



