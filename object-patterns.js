//creating private data
//the module pattern

var bike = (function() {

    // private
    var wheels = 2;
    var bellSound = "ring, ring";

    return {
        model: "monocog",

        wheelCount: function() {
            console.log( wheels );
        },

        ringBell: function() {
            console.log( bellSound );
        },

        setBell: function( newSound ) {
            bellSound = newSound;
        }
    };
})();

console.log(bike.wheels);
bike.wheelCount();
bike.ringBell();
bike.setBell("dingaling");
bike.ringBell();

var muppet = (function(){

	//private variables
	var hasBrain = false;
	var likesDrugs = false;
	var bodyColor = "purple";
	var hasHair = true;
	var eyeColor = "green";

	return {
		exposeBrain: function() {
		if (hasBrain) {
			console.log("I have a brain");
		} else {
			console.log("no I don't have a brain");
			}
		},

		giveBrain: function() {
			hasBrain = true;
		},

		exposeDrugs: function( specialKey ) {
			if ( specialKey === "please") {
				if (likesDrugs) {
				console.log("This muppet really likes candy");
				} else {
				console.log("What!, no way I like hugs not drugs");
				}

			} else {
				console.log("you don't know the special word");
			}
			
		}

	};
	
})();

muppet.exposeBrain();
muppet.exposeDrugs("now");
muppet.exposeDrugs("please");