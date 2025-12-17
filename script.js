function calculateHours() {
  const start = document.getElementById('start').value;
  const end = document.getElementById('end').value;
  if (!start || !end) return;
  const startDate = new Date(`1970-01-01T${start}:00`);
  const endDate = new Date(`1970-01-01T${end}:00`);
  let diff = (endDate - startDate) / (1000 * 60 * 60);
  if (diff < 0) diff += 24;
  document.getElementById('result').innerText = `Total work hours: ${diff.toFixed(2)} hours`;
}
