//module two

var carFunc = (function(){
	carMakes = ["ford", "hyuandi", "chevy", "porshce"];

	return {
		getCar: function( passkey ){
			if( passkey === "abcde"){
				return carMakes;
			} else {
				console.log("NO acces");
			}
		}
	};
})();

module.exports = carFunc;