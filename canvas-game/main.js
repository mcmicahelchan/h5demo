// ref site:https://dsb123dsb.github.io/2016/08/23/HTML5-Canvas%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%AE%9E%E6%88%98%E7%AF%87%E4%B9%8B%E2%80%94%E2%80%94%E5%B0%8F%E6%B8%B8%E6%88%8F%E5%88%9D%E4%BD%93%E9%AA%8Chero/

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const scoreContainer1 = document.getElementById('score1');
const scoreContainer2 = document.getElementById('score2');
// load image
let bgReadyState = false;
let bgImage = new Image();
bgImage.onload = () => {
	bgReadyState = true;
	console.log('image loaded');
};
bgImage.src = './assets/bg4.jpg'

let acneReadyState = false;
let acneImage = new Image();
acneImage.onload = () => {
	acneReadyState = true;
	console.log('image loaded');
};
acneImage.src = './assets/acne.png'

let heroReadyState = false;
let heroImage = new Image();
heroImage.onload = () => {
	heroReadyState = true;
	console.log('image loaded');
};
heroImage.src = './assets/hero.png'

let hero2ReadyState = false;
let hero2Image = new Image();
hero2Image.onload = () => {
	hero2ReadyState = true;
	console.log('image loaded');
};
hero2Image.src = './assets/hero2.png'

// 创建对象
class avatar 
{
	constructor(x, y) 
	{	
		this.x = x;
		this.y = y;
	}

	reset() 
	{
		this.x = 32 + Math.random() * (480 - 32*2);
		this.y = 32 + Math.random() * (640 - 32*2);
	}

}

class hero extends avatar
{
	constructor(x, y, v, type)
	{
		super(x, y);
		this.speed = v;
		this.points = 0;
		this.type = type;
	}

	move(array, interval, acne_x, acne_y) {
		const arr = Object.keys(array);
		console.log(arr);
		if (arr.length) {

			arr.forEach((item, index) => {
				if (this.type === 1) {
						switch(item) {
						// left
						case '37':
							this.x -= interval * this.speed;
							this.x = this.x < 0 ? 0 : this.x;
							this.x = this.x + 32 > 480 ? 448 : this.x;
							console.log('left');
							break;
						// up
						case '38':
							this.y -= interval * this.speed;
							this.y = this.y < 0 ? 0 : this.y;
							this.y = this.y + 32 > 640 ? 608 : this.y;
							console.log('up');
							break;
						// right 
						case '39':
							this.x += interval * this.speed;
							this.x = this.x < 0 ? 0 : this.x;
							this.x = this.x + 32 > 480 ? 448 : this.x;
							console.log('right');
							break;
						// down
						case '40':
							this.y += interval * this.speed;
							this.y = this.y < 0 ? 0 : this.y;
							this.y = this.y + 32 > 640 ? 608 : this.y;
							console.log('down');
							break;
						default:
							break;
					}
				} else if (this.type === 2) {
					switch(item) {
						// left
						case '65':
							this.x -= interval * this.speed;
							this.x = this.x < 0 ? 0 : this.x;
							this.x = this.x + 32 > 480 ? 448 : this.x;
							console.log('left');
							break;
						// up
						case '87':
							this.y -= interval * this.speed;
							this.y = this.y < 0 ? 0 : this.y;
							this.y = this.y + 32 > 640 ? 608 : this.y;
							console.log('up');
							break;
						// right 
						case '68':
							this.x += interval * this.speed;
							this.x = this.x < 0 ? 0 : this.x;
							this.x = this.x + 32 > 480 ? 448 : this.x;
							console.log('right');
							break;
						// down
						case '83':
							this.y += interval * this.speed;
							this.y = this.y < 0 ? 0 : this.y;
							this.y = this.y + 32 > 640 ? 608 : this.y;
							console.log('down');
							break;
						default:
							break;
				}
				}
				

			}) 

		}

		
		if (this.x + 32 >= acne_x && this.x <= acne_x + 32 && this.y + 32 >= acne_y && this.y <= acne_y + 32) {
			this.points++;
			return true;
		}
		return false;	
	}


}

let michael = new hero(240, 320, 256, 1);
let jaymee = new hero(140, 230, 256, 2);
let acne = new avatar(0, 0);

// 处理输入
let keys = {};
addEventListener('keydown', (event) => {
	console.log(event.keyCode);
	if (event.keyCode === 37 || event.keyCode === 38 || event.keyCode === 39 || event.keyCode === 40) {
		keys[event.keyCode] = true;
	}
	if (event.keyCode === 87 || event.keyCode === 65 || event.keyCode === 83 || event.keyCode === 68) {
		keys[event.keyCode] = true;
	}
});
addEventListener('keyup', (event) => {
	if (keys.hasOwnProperty(event.keyCode)) {
		delete keys[event.keyCode];
	}
});

// 重新开始
function reset() {
	acne.reset();
	scoreContainer1.textContent = michael.points;
	scoreContainer2.textContent = jaymee.points;

}

// 更新位置
function update(interval) {
	if (michael.move(keys, interval, acne.x, acne.y) || jaymee.move(keys, interval, acne.x, acne.y)) {
		reset();
	}
}

function render() {
	if (bgReadyState) {
		ctx.drawImage(bgImage, 0, 0);
	}
	if (acneReadyState) {
		ctx.drawImage(acneImage, acne.x, acne.y);
	}
	if (heroReadyState) {
		ctx.drawImage(heroImage, michael.x, michael.y);
	}
	if (hero2ReadyState) {
		ctx.drawImage(hero2Image, jaymee.x, jaymee.y);
	}
	

}

// 开始游戏
let main = ((then_init)=>{
	let _then = then_init;
	return () => {
		let now = Date.now();
		let interval = now - _then;
		// 更新状态
		update(interval / 1000);
		//渲染
		render();
		_then = now;
		//下一次循环
		requestAnimationFrame(main);	
	}
})(Date.now());

reset();
main();




