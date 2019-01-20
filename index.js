var Cat = require('./cat');
var Mouse = require('./Mouse');
var Dog = require('./Dog');

var cat = new Cat('Tom');
var mouse = new Mouse('Jerry');
var dog = new Dog("Jeck");

try{
 cat.eat(dog);
}catch(error){
	console.log("Error ! Cat cannot eat Dog");
}


console.log(cat);