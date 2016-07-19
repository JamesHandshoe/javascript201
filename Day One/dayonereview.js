/* day 1 review*/

//IIFE - Immediately invoked function expression

var myIIFE = (function(){
	var privateVar = "secrets";

	return {
		method: function(){
			console.log( privateVar );
		}
	};

})();

//functions are hoisted
