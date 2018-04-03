import avatar from './avatar';

export default class hero extends avatar
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