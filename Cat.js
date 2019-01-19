function Cat(){
	this.stomach = [];
	var x;
}

this.prototype.eat = function(mouse){
	this.stomach.push(mouse);
};

module.exports = Cat;