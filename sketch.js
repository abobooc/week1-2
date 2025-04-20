let noiseOffsetX = 0;
let noiseOffsetY = 10000;

function setup() { //設定
  //產生一個寬高為整個視窗的寬高畫布
  createCanvas(windowWidth, windowHeight);//畫布大小
  background("#bde0fe"); // 設定背景顏色
}

function draw() { //畫圖
  // 設定圓的顏色隨著滑鼠移動改變
  let r = map(noise(noiseOffsetX), 0, 1, 0, 255);
  let g = map(noise(noiseOffsetY), 0, 1, 0, 255);
  let b = map(noise(noiseOffsetX + noiseOffsetY), 0, 1, 0, 255);
  fill(r, g, b); // 設定圓的顏色
  
  // 設定邊框顏色和粗細
  stroke("#ffffff"); // 設定邊框顏色為白色
  strokeWeight(1.5); // 設定邊框粗細
  
  // 繪製圓，並留下軌跡
  ellipse(mouseX, mouseY, 50, 50); // 繪製圓
  
  // 更新噪聲偏移量
  noiseOffsetX += 0.01;
  noiseOffsetY += 0.01;
}
