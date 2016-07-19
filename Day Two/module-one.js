//another way to export modules
var myFunc = (function(){
	return {
		describe: function() {
		return "I'm a CommonJS module";
		},	

		name: "James",

		names: ["Matt", "Ryan", "Paul", "James"]
	};
	

})();
module.exports = myFunc;