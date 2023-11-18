const MAX_SCALE = 3;
const MIN_SCALE = 1;

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
  color: "brown",
};

window.onload = function () {
  let dpr = 1; // DevicePixelRatio
  let scale = 1; // 拡大率

  // 表示領域左上の座標(CSSピクセル)
  let x = 0;
  let y = 0;

  // Windowの幅・高さ(CSSピクセル)
  let w = window.innerWidth;
  let h = window.innerHeight;

  const canvas = document.getElementById("myCanvas");
  const ctx = canvas.getContext("2d");
  ctx.canvas.style.width = `${w}px`;
  ctx.canvas.style.height = `${h}px`;

  dpr = window.devicePixelRatio;
  ctx.canvas.width = Math.floor(dpr * w);
  ctx.canvas.height = Math.floor(dpr * h);

  function render() {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.save();
    ctx.scale(scale * dpr, scale * dpr);
    ctx.translate(-x, -y);
    drawRoundedRectangle(
      ctx,
      rect.left,
      rect.top,
      rect.width,
      rect.height,
      rect.radius,
      rect.color
    );

    ctx.restore();
  }
  render();

  window.addEventListener(
    "wheel",
    function (event) {
      event.preventDefault();

      if (event.ctrlKey) {
        // 拡大・縮小
        const canvasX = x + event.clientX / scale;
        const canvasY = y + event.clientY / scale;
        scale = Math.max(MIN_SCALE, Math.min(MAX_SCALE, scale * (1 - event.deltaY / 100)));
        x = Math.max(0, Math.min(w - w / scale, canvasX - event.clientX / scale));
        y = Math.max(0, Math.min(h - h / scale, canvasY - event.clientY / scale));
      } else {
        // スクロール
        x = Math.max(0, Math.min(w - w / scale, x + event.deltaX / scale));
        y = Math.max(0, Math.min(h - h / scale, y + event.deltaY / scale));
      }

      render();
    },
    { passive: false }
  );
};
