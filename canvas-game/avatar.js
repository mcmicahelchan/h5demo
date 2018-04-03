export default class avatar 
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