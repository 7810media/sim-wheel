// Auto-scroll the wheel upward
function autoScrollWheel() {
  const table = document.getElementById("wheelTable").tBodies[0];
  let rows = Array.from(table.rows);
  let index = 0;

  setInterval(() => {
    // Reset all rows
    rows.forEach(r => r.classList.remove("playing"));

    // Highlight current row
    rows[index].classList.add("playing");

    // Scroll the table upward
    rows[index].scrollIntoView({ behavior: "smooth", block: "center" });

    // Move to next
    index = (index + 1) % rows.length;
  }, 3000); // change row every 3 seconds (for demo)
}

window.onload = autoScrollWheel;
