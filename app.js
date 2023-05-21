const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = 2;

const colors = [
  "#55efc4",
  "#81ecec",
  "#74b9ff",
  "#00b894",
  "#00cec9",
  "#0984e3",
  "#ffeaa7",
  "#fab1a0",
  "#ff7675",
  "#fdcb6e",
  "#d63031",
  "#2d3436",
  "#fd79a8",
];

function onclick(event) {
  ctx.beginPath();
  ctx.moveTo(400, 400);
  const color = colors[Math.floor(Math.random() * colors.length)];
  ctx.lineTo(event.offsetX, event.offsetY);
  ctx.strokeStyle = color;
  ctx.stroke();
  ctx.moveTo(0, 0);
}

canvas.addEventListener("mousemove", onclick);
