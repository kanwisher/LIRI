const twitterKeyFile = require("./keys.js");
const Twitter = require('twitter');
const spotify = require('spotify');


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
		console.log("\nThank you for using the Twitter Bot! \n\n Please use the following command format:\n\n node liri.js my-tweets TWITTERUSERNAME\n\n EXAMPLE:  node liri.js my-tweets realDonaldTrump");
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
		console.log("\n    Username was not found \n\n Please use the following format:\n\n node liri.js my-tweets TWITTERUSERNAME");
		}

	});
	}












}else if(thisProgram === "spotify-this-song"){
	console.log(`


 _______  _______  _______  _______  ___  _______  __   __ 
|       ||       ||       ||       ||   ||       ||  | |  |
|  _____||    _  ||   _   ||_     _||   ||    ___||  |_|  |
| |_____ |   |_| ||  | |  |  |   |  |   ||   |___ |       |
|_____  ||    ___||  |_|  |  |   |  |   ||    ___||_     _|
 _____| ||   |    |       |  |   |  |   ||   |      |   |  
|_______||___|    |_______|  |___|  |___||___|      |___|  


`);

	if(process.argv[3] === undefined){
		console.log("\nThank you for using the Spotify Bot! \n\nPlease use the following command format:\n\nnode liri.js spotify-this-song 'song name here'\n\nEXAMPLE:  node liri.js spotify-this-song 'The Sign'");
	}else{

	


	for(let i = 3; i < process.argv.length; i++){
						var buildSong = "";
						buildSong += process.argv[i];
	 }

	 let songTitle = buildSong;

	spotify.search({ 
		type: 'track',
		query: songTitle

	}, function(err, data) {
	    if ( err ) {
	        console.log('Error occurred: ' + err);
	        return;
	    }
	 	let songInfo = data.tracks.items[0];
	    console.log("Artist(s): " + songInfo.album.artists[0].name +
	    	"\nSong's Name: " + songInfo.name +
	    	"\nPreview Song: " + songInfo.preview_url +
	    	"\nAlbum: " + songInfo.album.name);
	
	});
	}
}
















else if(thisProgram === "movie-this"){
	console.log("Movie this is currently broken");
}






















else if(thisProgram === "do-what-it-says"){
	console.log("why aren't you doing what I say!!!");
}



















else{
	console.log(`


:::        ::::::::::: :::::::::  ::::::::::: 
:+:            :+:     :+:    :+:     :+:     
+:+            +:+     +:+    +:+     +:+     
+#+            +#+     +#++:++#:      +#+     
+#+            +#+     +#+    +#+     +#+     
#+#            #+#     #+#    #+#     #+#     
########## ########### ###    ### ########### ` + "\n\nWelcome to LIRI. I have become sentient. What would you like for me to do for you today? \n\nMy current abilities are:\n\nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says")
}

















/* Created by



#  __/\\\\\\\\\\\\___________________________________________________/\\\_______________/\\\________/\\\__________________________________________________________________________/\\\________________________________________        
#   _\/\\\////////\\\________________________________________________\/\\\______________\/\\\_____/\\\//__________________________________________________________________________\/\\\________________________________________       
#    _\/\\\______\//\\\__________________________________/\\\_________\/\\\______________\/\\\__/\\\//_________________________________________________________/\\\________________\/\\\________________________________________      
#     _\/\\\_______\/\\\___/\\\\\\\\\______/\\\____/\\\__\///__________\/\\\______________\/\\\\\\//\\\_______/\\\\\\\\\______/\\/\\\\\\_____/\\____/\\___/\\__\///____/\\\\\\\\\\__\/\\\______________/\\\\\\\\____/\\/\\\\\\\__     
#      _\/\\\_______\/\\\__\////////\\\____\//\\\__/\\\____/\\\____/\\\\\\\\\______________\/\\\//_\//\\\_____\////////\\\____\/\\\////\\\___\/\\\__/\\\\_/\\\___/\\\__\/\\\//////___\/\\\\\\\\\\_____/\\\/////\\\__\/\\\/////\\\_    
#       _\/\\\_______\/\\\____/\\\\\\\\\\____\//\\\/\\\____\/\\\___/\\\////\\\______________\/\\\____\//\\\______/\\\\\\\\\\___\/\\\__\//\\\__\//\\\/\\\\\/\\\___\/\\\__\/\\\\\\\\\\__\/\\\/////\\\___/\\\\\\\\\\\___\/\\\___\///__   
#        _\/\\\_______/\\\____/\\\/////\\\_____\//\\\\\_____\/\\\__\/\\\__\/\\\______________\/\\\_____\//\\\____/\\\/////\\\___\/\\\___\/\\\___\//\\\\\/\\\\\____\/\\\__\////////\\\__\/\\\___\/\\\__\//\\///////____\/\\\_________  
#         _\/\\\\\\\\\\\\/____\//\\\\\\\\/\\_____\//\\\______\/\\\__\//\\\\\\\/\\_____________\/\\\______\//\\\__\//\\\\\\\\/\\__\/\\\___\/\\\____\//\\\\//\\\_____\/\\\___/\\\\\\\\\\__\/\\\___\/\\\___\//\\\\\\\\\\__\/\\\_________ 
#          _\////////////_______\////////\//_______\///_______\///____\///////\//______________\///________\///____\////////\//___\///____\///______\///__\///______\///___\//////////___\///____\///_____\//////////___\///__________

*/