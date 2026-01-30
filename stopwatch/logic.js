const timerEl = document.querySelector('.show');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const resetBtn = document.querySelector('.reset');

// Counters
let mc = 0; // hundredths of a seconds
let sc = 0; // seconds
let mn = 0; // minutes

let timerId = null;

// Helpers
function format(n) { return n < 10 ? `0${n}` : `${n}`; }
function updateDisplay() {
  const mcStr = format(mc);
  const scStr = format(sc);
  const mnStr = format(mn);
  timerEl.textContent = `${mnStr} : ${scStr} : ${mcStr}`;
}

// Start
startBtn.addEventListener('click', () => {
  // if already running, ignore
  if (timerId !== null) return;

  // disable start while running
  startBtn.disabled = true;
  pauseBtn.disabled = false;
  resetBtn.disabled = false;

  // tick every 10ms (mc increments 0..99 -> represents hundredths)
  timerId = setInterval(() => {
    mc++;
    if (mc >= 100) {
      mc = 0;
      sc++;
      if (sc >= 60) {
        sc = 0;
        mn++;
      }
    }
    updateDisplay();
  }, 10);
});

// Pause
pauseBtn.addEventListener('click', () => {
  if (timerId === null) return;
  clearInterval(timerId);
  timerId = null;
  startBtn.disabled = false;
});

// Reset
resetBtn.addEventListener('click', () => {
  if (timerId !== null) {
    clearInterval(timerId);
    timerId = null;
  }
  mc = sc = mn = 0;
  updateDisplay();
  startBtn.disabled = false;
  pauseBtn.disabled = false;
});
