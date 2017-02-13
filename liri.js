const twitterKeyFile = require("./keys.js");
const Twitter = require('./node_modules/twitter');


let client = new Twitter(twitterKeyFile.twitterKeys);
let params = {screen_name: process.argv[3],
	count: 10
			  };

if(process.argv[2] === "twitter"){
	console.log(
`M.......MMMMMMMMMMMMMMMMMMMMMMMMMMMMMM8............,MMMMM.......MMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMMM
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
MMMMMMM8?+++++ZMMMMMMN7+ZMMMMMD+?DMMMMMMM7?MMMMMMMMO+++IMMMMMMMN7+++NMMMMMMN7+IDMMMMMM8+8MMMMMMMMMMM`);

	if(process.argv[3] === undefined){
		console.log("       ~~~~~~~~~~~~~~~~~~~~~~~\n     Thank you for using the Twitter Bot! \n\n Please use the following command format:\n\n node liri.js TWITTERUSERNAME\n\n EXAMPLE:  node liri.js realDonaldTrump");
	}else{
	client.get('statuses/user_timeline', params, function(error, tweets, response) {
	  if (!error) {
	  	let tweetCount = 1;
	  	tweets.forEach(function(arrayItem) {
	  		let buildString = `-----------TWEET ${tweetCount}---------`;
	  		buildString += "\n\n\n";
	  		buildString += arrayItem.text;
	  		buildString += "\n\n\n";
	  		tweetCount++
	  		console.log(buildString)
	  		
	  	});
	}else if (error){
		console.log("\n    Username was not found \n\n Please use the following format:\n\n node liri.js TWITTERUSERNAME");
	}

	});
	}
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
