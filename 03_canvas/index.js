function drawRoundedRectangle(ctx, x, y, width, height, radius, color) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.arc(x + width - radius, y + radius, radius, Math.PI * 1.5, Math.PI * 2);
  ctx.lineTo(x + width, y + height - radius);
  ctx.arc(x + width - radius, y + height - radius, radius, 0, Math.PI * 0.5);
  ctx.lineTo(x + radius, y + height);
  ctx.arc(x + radius, y + height - radius, radius, Math.PI * 0.5, Math.PI);
  ctx.lineTo(x, y + radius);
  ctx.arc(x + radius, y + radius, radius, Math.PI, Math.PI * 1.5);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

window.onload = function () {
  const canvas = document.getElementById("myCanvas");
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  const ctx = canvas.getContext("2d");
  drawRoundedRectangle(ctx, 30, 10, 400, 300, 20, "blue");
};
