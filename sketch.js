function setup() {
  // 畫布大小為全螢幕
  createCanvas(windowWidth, windowHeight);
  // 設定顏色模式為HSB
  colorMode(HSB);
  // 設定背景色
  background(220);
}

function draw() {
  // 根據滑鼠的 X 位置設定色相
  let hue = map(mouseX, 0, width, 0, 360);
  
  // 根據滑鼠的 Y 位置設定亮度
  let brightness = map(mouseY, 0, height, 0, 100);
  
  // 設定填充色 (HSB格式)
  fill(hue, 100, brightness);
  
  // 畫圓，圓的寬高為200px，位置隨滑鼠移動
  ellipse(mouseX, mouseY, 200, 200);
}
