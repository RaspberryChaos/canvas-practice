/*
ctx.fillStyle = "red";
ctx.beginPath();
ctx.arc(100, 100, 50, 0, Math.PI*2);
ctx.fill();

ctx.strokeStyle = "blue";
ctx.fillStyle = "yellow"
ctx.lineWidth = 15;
ctx.beginPath();
ctx.arc(300, 100, 50, 0, Math.PI*2);
ctx.stroke();
ctx.fill();


function initParticles() {
    for(let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}
initParticles();
console.log(particlesArray)

function drawCircle() {
    ctx.fillStyle = "pink";
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 20, 0, Math.PI*2);
    ctx.fill();
}

function drawRectangle() {
    ctx.fillStyle = "purple";
    ctx.fillRect(mouse.x, mouse.y, 50, 50)
}
*/