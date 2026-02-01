const progress = document.querySelector(".progress");
const track = document.querySelector(".track");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

let percent = 0;
let timer = null;

function setPercent(p) {
  // clamp 0..100
  p = Math.max(0, Math.min(100, p));
  percent = p;
  progress.style.transform = "scaleX(" + p / 100 + ")";
  track.textContent = Math.round(p) + "%";
}

startBtn.addEventListener("click", () => {
  // Only start if not already downloading
  if (timer) return;

  if (percent < 100) {
    startBtn.innerHTML = "Downloading...";
  }

  timer = setInterval(() => {
    if (percent >= 100) {
      startBtn.innerHTML = "Downloaded";
      clearInterval(timer);
      timer = null;
      return;
    }
    setPercent(percent + 7); // increment
  }, 300);
});

resetBtn.addEventListener("click", () => {
  startBtn.innerHTML = "Download";
  clearInterval(timer);
  timer = null;
  setPercent(0);
});
