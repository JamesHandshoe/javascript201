//Three ways to instantiate an Object

var foo = {}; //anonymous object - this is preferred
var bar = new Object(); //object literal
var baz = Object.create( null );

var fooWithProperties = {
	//properties
	aProperty: true,
	anotherProp: "property",

	//methods
	myMethod: function() {
		console.log("method");
	}
};

