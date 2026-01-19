
const qt = document.getElementById('quote') 
const btn = document.getElementById('btn') 

const quotes = [
  "Nobody cares about your excuses. Results are the only language the world understands.",
  "Discipline will beat motivation every single time.",
  "You’re not tired, you’re just comfortable. Comfort kills ambition.",
  "Stop waiting for the perfect time — it doesn’t exist.",
  "Hard work doesn’t guarantee success, but without it, failure is guaranteed.",
  "Your feelings don’t matter to reality. Effort does.",
  "Dreams are free. Hustle is sold separately.",
  "If you quit now, you’ll just have to start over later.",
  "No one is coming to save you. It’s on you.",
  "You don’t need more time. You need more focus.",
  "Success is rented, and rent is due every day.",
  "You’re not behind because life is unfair. You’re behind because you wasted time.",
  "Pain is temporary. Regret lasts forever.",
  "Stop being loyal to your comfort zone.",
  "The world rewards action, not intention.",
  "You don’t get what you want. You get what you work for.",
  "Excuses make today easy, but tomorrow harder.",
  "If you’re not obsessed, you’re not serious.",
  "Success doesn’t care about your mood. Show up anyway.",
  "You either suffer the pain of discipline or the pain of regret. Choose wisely."
];

btn.addEventListener('click', function() {
    // Add a quick fade out effect via opacity
    qt.style.opacity = '0';
    
    setTimeout(() => {
        let idx = Math.floor(Math.random() * quotes.length);
        qt.innerText = `${quotes[idx]}`;
        qt.style.opacity = '1';
        console.log(idx);
    }, 200);
});

// Initial style set for transition
qt.style.transition = 'opacity 0.2s ease-in-out';
