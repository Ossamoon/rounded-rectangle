function drawRoundedRectangle(ctx, left, top, width, height, radius, color) {
  ctx.beginPath();
  ctx.moveTo(left + radius, top);
  ctx.lineTo(left + width - radius, top);
  ctx.arc(left + width - radius, top + radius, radius, Math.PI * 1.5, Math.PI * 2);
  ctx.lineTo(left + width, top + height - radius);
  ctx.arc(left + width - radius, top + height - radius, radius, 0, Math.PI * 0.5);
  ctx.lineTo(left + radius, top + height);
  ctx.arc(left + radius, top + height - radius, radius, Math.PI * 0.5, Math.PI);
  ctx.lineTo(left, top + radius);
  ctx.arc(left + radius, top + radius, radius, Math.PI, Math.PI * 1.5);
  ctx.closePath();
  ctx.fillStyle = color;
  ctx.fill();
}

const rect = {
  left: 30,
  top: 10,
  width: 400,
  height: 300,
  radius: 20,
  color: "green",
};

window.onload = function () {
  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.canvas.style.width = `${window.innerWidth}px`;
  ctx.canvas.style.height = `${window.innerHeight}px`;

  const dpr = window.devicePixelRatio;
  ctx.canvas.width = Math.floor(dpr * window.innerWidth);
  ctx.canvas.height = Math.floor(dpr * window.innerHeight);

  ctx.scale(dpr, dpr);
  drawRoundedRectangle(ctx, rect.left, rect.top, rect.width, rect.height, rect.radius, rect.color);
};
