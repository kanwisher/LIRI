const twitterKeyFile = require("./keys.js");
const Twitter = require('twitter');


let thisProgram = process.argv[2];
let client = new Twitter(twitterKeyFile.twitterKeys);
let params = {screen_name: process.argv[3],
	count: 10
			  };

if(thisProgram === "my-tweets"){
			console.log(`
		M.......MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM8............,MMMMM.......MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
		..~+++...MMMMMMMMMMMMMMMMMMMMMMMMMMMMM..++++..++++..:MMM...+++:..MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
		..+++++.......:MMMMMMMMMMMMMMMMMMMMMM8..++++:.++++=..MMM..+++++..MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
		..+++++...............MMM.....?MM=.......++,..++++=..ZZZ..+++++..OZZMMMMO........,NMMMMD.. ......~MM
		..++++++++++++++..++...7..=++......++=........++++=.......+++++.......,...,++++=....8$...,++++++...M
		..++++++++++++++.++++....=++++....++++:.++++..+++++++++++.+++++++++++...+++++++++++....++++++++++..N
		..+++++=======,..++++....=++++....++++:.++++:.+++++++++++.+++++++++++=.+++++,.,+++++..++++++++++~..M
		..+++++..........++++....=++++....++++:.++++~.++++++++++..=+++++++++~.~+++++++++++++:+++++........MM
		..+++++.... .....++++....+++++....++++,.++++~.+++++.......,++++.......=+++++++++++++.++++=..MMMMMMMM
		..~++++++++++++..++++++:+++++++==+++++..++++~..+++++++++...+++++++++:..++++=....,=+,.++++=..MMMMMMMM
		M..:++++++++++++..+++++++++++++++++++...++++~..:+++++++++...?++++++++=..+++++++++++=.++++=..MMMMMMMM
		MM...++++++++++~....+++++++.~++++++:....++++.....++++++++....~+++++++....:++++++++...,+++...MMMMMMMM
		MMMN.............M,..................M8......~M$..........$M...........M...........:.......MMMMMMMMM
		MMMMMMM8?+++++ZMMMMMMN7+ZMMMMMD+?DMMMMMMM7?MMMMMMMMO+++IMMMMMMMN7+++NMMMMMMN7+IDMMMMMM8+8MMMMMMMMMMM
		`);

	if(process.argv[3] === undefined){
		console.log("\nThank you for using the Twitter Bot! \n\n Please use the following command format:\n\n node liri.js TWITTERUSERNAME\n\n EXAMPLE:  node liri.js realDonaldTrump");
	}else{
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	let tweetCount = 1;
	  	tweets.forEach(function(arrayItem) {
	  		let buildString = `\n\n\n                      -----------TWEET ${tweetCount}---------`;
	  		buildString += "\n\n\n";
	  		buildString += arrayItem.text;
	  		
	  		tweetCount++
	  		console.log(buildString)
	  		
	  	});
	}else if (error){
		console.log("\n    Username was not found \n\n Please use the following format:\n\n node liri.js TWITTERUSERNAME");
		}

	});
	}
}else if(thisProgram === "spotify-this-song"){
	console.log("Spotify is being built, please come back later");

}else if(thisProgram === "movie-this"){
	console.log("Movie this is currently broken");
}else if(thisProgram === "do-what-it-says"){
	console.log("why aren't you doing what I say!!!");
}else{
	console.log(`


:::        ::::::::::: :::::::::  ::::::::::: 
:+:            :+:     :+:    :+:     :+:     
+:+            +:+     +:+    +:+     +:+     
+#+            +#+     +#++:++#:      +#+     
+#+            +#+     +#+    +#+     +#+     
#+#            #+#     #+#    #+#     #+#     
########## ########### ###    ### ########### ` + "\n\nWelcome to LIRI. I have become sentient. What would you like for me to do for you today? \n\nMy current abilities are:\n\nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says")
}



















//playing around!

// twitterKeyFile.twitterKeys.forEach(function (arrayItem) {
// for(var key in arrayItem){
// 	if(key === "consumer_key" || key === "Other_key"){
// 		console.log(arrayItem[key]);
// 	}else {
// 		console.log("No key was matched")
// 	}
// }
// });
