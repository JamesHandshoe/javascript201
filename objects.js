//Three ways to instantiate an Object

// var foo = {}; //anonymous object - this is preferred
// var bar = new Object(); //object literal
// var baz = Object.create( null );

// var fooWithProperties = {
// 	//properties
// 	aProperty: true,
// 	anotherProp: "property",

// 	//methods
// 	myMethod: function() {
// 		console.log("method");
// 	}
// };

// var bike = {
// 	//properties
// 	wheels: 2,
// 	hasBell: false, 
// 	color: "black",
// 	type: "mountain",
// 	hasHandlebars: true,

// 	//methods
// 	ringBell: function(){
// 		if (this.hasBell) {
// 			console.log("ring, ring");
// 		} else {
// 			console.log("I need a bell");
// 		}
// 	},

// 	addBell: function() {
// 		console.log("I have a bell");
// 		this.hasBell = true;
// 	}
// };

// bike.ringBell();
// bike.addBell();
// bike.ringBell();
// var bellSound = "dingaling";
// function ringGlobalBell(){
// 	console.log(this.bellSound);
// }

// var bike1 = {
// 	bellSound: "ring ring",
// 	ringBell: function() {
// 		console.log(this.bellSound);
// 	}
// };

// var bike2 = {
// 	bellSound: "ding ding",
// 	ringBell: function() {
// 		console.log(this.bellSound);
// 	}
// };

// ringGlobalBell();
// bike1.ringBell();
// bike2.ringBell();

// function ringGlobalBell ( bike ) {
// 	console.log( bike + ": " + this.bellSound);
// }

// var bike1 = {
// 	bellSound: "ring, ring"
// };

// var bike2 = {
// 	bellSound: "ding, ding"
// };

// var bellSound = "dingaling";

// // call()
// ringGlobalBell.call( this, "global" );

// //call as bike1
// ringGlobalBell.call( bike1, "bike1" );

// //call as bike2
// ringGlobalBell.call( bike2, "bike2" );

// // apply()

// ringGlobalBell.apply( this, [ "global" ]);
// ringGlobalBell.apply( bike1, [ "bike1" ]);
// ringGlobalBell.apply( bike2, [ "bike2" ]);

// // bind()
// var ringBike1Bell = ringGlobalBell.bind(bike1);
// ringBike1Bell("bike1");

// var ringBike2Bell = ringGlobalBell.bind(bike2);
// ringBike2Bell("bike2");

// // once bound it can't change
// bike2.ringBell = ringBike1Bell;
// bike2.ringBell("bike2");

// // Constructors

// function Bike( model ) {
// 	//properties
// 	this.model = model;
// 	//methods
// 	this.logModel = function() {
// 		console.log(this.model);
// 	};
// }

// var bike1 = new Bike("Defy");
// var mountainBike = new Bike("Monocog");

// console.log( bike1 instanceof Bike );
// console.log( mountainBike instanceof Bike );

// console.log(bike1.model);
// bike1.logModel();

// //Prototype
// Bike.prototype.wheels = 2;
// console.log(bike1.wheels);
// console.log(mountainBike.wheels);

//prototype with object literal

function Bike( model ){
	this.model = model;
}

Bike.prototype = {
	constructor: Bike,
	wheels: 2,
	logModel: function(){
		console.log( this.model );
	}
};

var bike1 = new Bike("defy");
console.log(bike1.constructor);