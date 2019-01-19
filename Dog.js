function Dog(){
	this.stomach = [];
}

Dog.prototype.eat = function(bone) {
	this.stomach.push(bone)
};