function Human (name, age, details) {
	this.name = name;
	this.age = age;
	this.details = details;
}

Human.prototype = {
	construcor: Human,

	showAge: function(){
		console.log("I'm this many: " + this.age);
	},

	sayName: function(){
		console.log("My name is: " + this.name);
	},

	showDetails: function(){
		console.log("I do this: " + this.age);
	}
};