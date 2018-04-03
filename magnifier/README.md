## drawImage的用法

drawImage()可以接受一下 3 套参数：

- drawImage(imagedata, dx, dy);此方法会将整幅图像绘制到 canvas的指定位置上，dx ，dy分别指目标 canvas 开始绘制点的 x , y坐标。
- drawImage(imagedata, dx, dy , dw, dh);此套参数中新增的2个参数dw,dh分别代表绘制时指定的宽和高（也因此实现缩放的效果）。
- drawImage(imagedata, sx, sy, sw, sh, dx, dy, dw, dh);此套参数中又新增了4个参数sx, sy, sw, sh,分别代表被绘制图像开始绘制点的 x, y坐标，以及被绘制部分的宽和高。
