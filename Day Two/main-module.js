var mod1 = require("./module-one.js");
var mod2 = require("./module-two.js");

console.log(mod1.describe());
console.log(mod1.name);

for(var name in mod1.names){
	console.log(mod1.names[name]);
}

var receivedCarMakes = mod2.getCar("abcde");

for(var car in receivedCarMakes){
	console.log(receivedCarMakes[car]);
}