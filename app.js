const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    ctx.fillStyle = "white";
    ctx.fillRect(10, 10, 50, 50);
});

const mouse = {
    x: undefined,
    y: undefined
}


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

class Particle {
    constructor(){
        //this.x = mouse.x;
        //this.y = mouse.y;
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        //shrink effect
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        //ctx.fillStyle = Math.random() >= 0.5 ? "green" : "purple";
        ctx.fillStyle = Math.random() >= 0.3 ? "yellow" : "red";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
    }
}


canvas.addEventListener("click", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    particlesArray.push(new Particle());
    //Math.random() >=0.5 ? drawCircle() : drawRectangle();
    
})

canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
   // drawCircle();
    console.log(mouse);
})


function initParticles() {
    for(let i = 0; i < 100; i++) {
        particlesArray.push(new Particle());
    }
}
initParticles();
console.log(particlesArray)

function handleParticles() {
    for(let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    requestAnimationFrame(animate);
    //drawCircle();
    handleParticles();
}

animate();