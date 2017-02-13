const twitterKeyFile = require("./keys.js");

twitterKeyFile.twitterKeys.forEach(function (arrayItem) {
for(var key in arrayItem){
	if(key === "consumer_key" || key === "Other_key"){
		console.log(arrayItem[key]);
	}else {
		console.log("No key was matched")
	}
}
});

