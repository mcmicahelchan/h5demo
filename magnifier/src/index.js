const original = document.getElementById('original');
const originalCtx = original.getContext('2d');
const magnified = document.getElementById('magnified');
const magnifiedCtx = magnified.getContext('2d');
const square = document.getElementById('square');
let factor = 1;
let image = new Image();
image.onload = () => {
    originalCtx.drawImage(image, 0, 0, original.width, original.height);
    factor = image.width / original.width;
}
image.src = './assets/img.jpg';

// 获取大canvas的相对于浏览器的位置
const originalPosition = original.getBoundingClientRect();

//事件处理器
window.onmousemove = (event) => {
    // 获取鼠标位置
    const x = event.clientX;
    const y = event.clientY;
    // 判断是否在canvas所在的位置里面。
    if (x <= (original.offsetLeft + original.offsetWidth) && x >= original.offsetLeft && y <= (original.offsetTop + original.offsetHeight) && y >= original.offsetTop) {
        // 显示
        show(x, y);

    } else {
        // 隐藏
        hide();
    }
}

function hide() {
    square.style.display = 'none';
    magnified.style.display = 'none';
}

function show(x, y) {
    square.style.display = 'block';
    magnified.style.display = 'inline';
    // 计算坐标，并且处理边界问题
    let x_modified = (x - 45);
    let y_modified = (y - 45);
    x_modified = x_modified < original.offsetLeft ? original.offsetLeft : x_modified;
    x_modified = x_modified > (original.offsetLeft + original.offsetWidth - 90) ? (original.offsetLeft + original.offsetWidth - 90) : x_modified;
    y_modified = y_modified < original.offsetTop ? original.offsetTop : y_modified;
    y_modified = y_modified > (original.offsetTop + original.offsetHeight - 90) ? (original.offsetTop + original.offsetHeight - 90) : y_modified;

    move(x_modified, y_modified);
    drawMagnifiedPicture(x_modified, y_modified);
}

// 移动蓝色放大框
function move (x, y) {
    square.style.left = x + 'px';
    square.style.top = y + 'px';
}

// 画出放大的图像
function drawMagnifiedPicture (x, y) {
    // 计算对应原图的坐标和宽高
    let x_pic = Math.round(x * factor);
    let y_pic = Math.round(y * factor);
    let pic_width = Math.round(square.offsetWidth * factor);
    let pic_height = Math.round(square.offsetHeight * factor);
    magnifiedCtx.drawImage(image, x_pic, y_pic, pic_width, pic_height, 0, 0, magnified.width, magnified.height);
}





