let health = 100;
let happiness = 100;

// Decrease health and happiness over time
setInterval(function() {
    health -= 10;
    happiness -= 10;
    document.getElementById('health').textContent = health;
    document.getElementById('happiness').textContent = happiness;
}, 1000);

// Feed the pet to increase health
document.getElementById('feed').addEventListener('click', function() {
    health += 20;
    document.getElementById('health').textContent = health;
});

// Play with the pet to increase happiness
document.getElementById('play').addEventListener('click', function() {
    happiness += 20;
    document.getElementById('happiness').textContent = happiness;
});

// Heal the pet to increase health and happiness
document.getElementById('heal').addEventListener('click', function() {
    health += 20;
    happiness += 20;
    document.getElementById('health').textContent = health;
    document.getElementById('happiness').textContent = happiness;
});
