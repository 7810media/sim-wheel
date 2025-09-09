function startProgress() {
  let progress = document.getElementById("progress");
  let width = 0;
  progress.style.width = "0%";

  let interval = setInterval(() => {
    if (width >= 100) {
      clearInterval(interval);
    } else {
      width++;
      progress.style.width = width + "%";
    }
  }, 100); // ~10 seconds to fill
}
