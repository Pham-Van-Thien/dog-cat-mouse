var chalk = require('chalk');

function Dog(name){
	this.name = name;
	this.stomach = [];
}

Dog.prototype.eat = function(bone) {
	this.stomach.push(bone);
};

Dog.prototype.sayHi = function(){
	console.log("Hi! I am a Dog, my name is  " + chalk.blue(this.name));
};

module.exports = Dog;
