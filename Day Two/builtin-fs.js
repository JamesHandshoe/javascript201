//node paradigm break on errors first!!

var fs = require('fs');
var out;

console.log(__dirname);

fs.realpath(__dirname, function(err, path){
	if (err){
		console.log(err);
		return;
	}

	console.log('realpath async' + path);
});

//info on the directory
fs.stat(__dirname, function( err, contents ){
	if (err) return;
	
	console.log( contents );
});
