// function declarations

// function square( number ) {
// 	return number * number;
// }

// // function expression

// var add = function( num1, num2 ) {
// 	return num1 + num2;
// };

// console.log(square( 11 ));

// // function expression with identifier
// // recursive funtions
// var factorial = function factorial( number ) {
// 	if ( number < 2 ) {
// 		return 1;
// 	}

// 	return number * factorial( number - 1);
// };

// var sum = function innerSum( num1, num2 ) {
// 	return num1 + num2;
// };

// // Hoisting
// // JS will hoist functions but not variables but not function expressions.
// var result = console.log(squair(11));

// //hoistable
// function squair( num ) {
// 	return num * num;
// }

// //not hoistable
// var addNum = function(num1, num2){
// 	return num1 + num2;
// };

// parameters

function echo( value ) {
	return value;
}

console.log( echo("heyo"));
console.log( echo("don't panic", 42));

// arity
console.log( echo.length );

//arguments
function echo2(){
	return arguments;
}

console.log( echo2("howdy", 12, 15) );

function sum() {
	var result = 0,
		i = 0,
		len = arguments.length;

	while (i < len ) {
		if ( typeof arguments[i] !== "number" ) {
			return "sorry must be a number";
		}

		result += arguments[i];
		i++;
	}

	return result;
}

console.log( sum( 1, 2) );
console.log( sum( 3, 4, 5, 6, 7 ) );