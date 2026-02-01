const progress = document.querySelector(".bar");
const track = document.querySelector(".track");
const download = document.querySelector("#down");
const reset = document.querySelector("#reset");

let count = 0;
let interval = null; // keep interval outside so we can stop it

download.addEventListener("click", () => {
  // if already downloading, ignore extra clicks
  if (interval) return;

  // reset if it was already completed
  if (count >= 100) {
    count = 0;
    progress.style.width = "0%";
    track.textContent = "0%";
  }

  download.textContent = "Downloading...";

  interval = setInterval(() => {
    if (count < 100) {
      count += 10;
      track.textContent = `${count}%`;
      progress.style.width = count + "%";
    } else {
      clearInterval(interval);
      interval = null;
      download.textContent = "Downloaded :)";
    }
  }, 200);
});

