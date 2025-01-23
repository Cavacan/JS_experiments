const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// 基点 O の座標
const origin = { x: 50, y: 450 };

// パラメータ取得
const velocityXInput = document.getElementById("velocityX");
const velocityYInput = document.getElementById("velocityY");
const gravityInput = document.getElementById("gravity");

const velocityXValue = document.getElementById("velocityXValue");
const velocityYValue = document.getElementById("velocityYValue");
const gravityValue = document.getElementById("gravityValue");

// スライダー値を更新
velocityXInput.addEventListener("input", () => {
  velocityXValue.textContent = velocityXInput.value;
});
velocityYInput.addEventListener("input", () => {
  velocityYValue.textContent = velocityYInput.value;
});
gravityInput.addEventListener("input", () => {
  gravityValue.textContent = gravityInput.value;
});

// 放物線を描く関数
function drawParabola() {
  ctx.clearRect(0, 0, canvas.width, canvas.height); // キャンバスをクリア

  const velocityX = Number(velocityXInput.value); // X方向の速度
  const velocityY = Number(velocityYInput.value); // 初速度（Y方向）
  const gravity = Number(gravityInput.value); // 重力加速度

  let posX = origin.x;
  let posY = origin.y;
  let time = 0;

  function drawFrame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // 前フレームの軌跡をクリア

    // 放物線の位置を計算
    posX = origin.x + velocityX * time;
    posY = origin.y + velocityY * time + 0.5 * gravity * time * time;

    // 範囲外の場合は描画を停止
    if (posX > 500 || posX < -50 || posY > 500) {
      cancelAnimationFrame(animation);
      return;
    }

    // 砲弾を描画
    ctx.beginPath();
    ctx.arc(posX, posY, 5, 0, Math.PI * 2);
    ctx.fillStyle = "red";
    ctx.fill();

    time += 0.5; // 時間を進める
    animation = requestAnimationFrame(drawFrame);
  }

  let animation = requestAnimationFrame(drawFrame);
}

// キャンバスクリックで放物線を描く
canvas.addEventListener("click", drawParabola);
