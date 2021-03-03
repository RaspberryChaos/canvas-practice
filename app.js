const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particlesArray = [];
let hue = 0;

window.addEventListener("resize", function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    //ctx.fillStyle = "white";
    //ctx.fillRect(10, 10, 50, 50);
});

const mouse = {
    x: undefined,
    y: undefined
}

canvas.addEventListener("click", function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    for(let i = 0; i < 10; i++) {
        particlesArray.push(new Particle());
    }
    //Math.random() >=0.5 ? drawCircle() : drawRectangle();
    
})

canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
   // drawCircle();
   // console.log(mouse);
    for(let i = 0; i < 5; i++) {
        particlesArray.push(new Particle());
    }
})


class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        //this.x = Math.random() * canvas.width;
        //this.y = Math.random() * canvas.height;
        this.size = Math.random() * 15 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = 'hsl(' + hue +', 100%, 50%)';
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;
        //shrink effect
        if (this.size > 0.2) this.size -= 0.1;
    }

    draw() {
        //ctx.fillStyle = Math.random() >= 0.5 ? "green" : "purple";
        //ctx.fillStyle = Math.random() >= 0.3 ? "yellow" : "red";
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
        ctx.fill();
    }
}


function handleParticles() {
    for(let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
        if(particlesArray[i].size <= 0.3) {
            particlesArray.splice(i,1);
            i--;
        }
    }
}
/*
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
   // ctx.fillStyle = 'rbga(0,0,0,0.05)';
   // ctx.fillRect(0, 0, canvas.width, canvas.height);
    //console.log(ctx.fillStyle)
    //drawCircle();
    handleParticles();
    hue++;
    requestAnimationFrame(animate);
}*/

function animate(){
    //ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = 'rgba(0,0,0,0.02)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    hue++
    //frame++;
    requestAnimationFrame(animate);
}

animate();