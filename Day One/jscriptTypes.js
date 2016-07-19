//Javascript types
//String
//Number
//Boolean
//null
//undefined

//objects
var object1 = new Object(); //object1 = {}
var object2 = object1;

object1.myCustomProperty = "blah";
console.log(object2.myCustomProperty);

//array

var arry = new Array(16);
arry.join("cheese");
console.log(arry);

//Built in types

var items = new Array();
// the array literal notation is preferred []

var items = [];

//date
var now = new Date();

//error
var error = new Error("something is fishy");

//functions
var fn = new Function("console.log('function')");

//objects
var object = new Object();

//regex
var re = new RegExp("\\d+"); //--> look for types of numbers

//regex example
var myString = "foo bar";
myString.replace(\g\sd);

var cars = new Array();
