const lineWidth = document.getElementById("line-width");
const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
canvas.width = 800;
canvas.height = 800;
ctx.lineWidth = lineWidth.value;

let isPaining = false;

function onMove(event) {
  if (isPaining) {
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
    return;
  }
  ctx.beginPath();
  ctx.moveTo(event.offsetX, event.offsetY);
}

function startPainting(event) {
  isPaining = true;
}

function cancelPaining(event) {
  isPaining = false;
}

function onLineWidthChange(event) {
  console.log(event.target.value);
  ctx.lineWidth = event.target.value;
}

canvas.addEventListener("mousemove", onMove);
canvas.addEventListener("mousedown", startPainting);
canvas.addEventListener("mouseup", cancelPaining);
canvas.addEventListener("mouseleave", cancelPaining);
lineWidth.addEventListener("change", onLineWidthChange);
