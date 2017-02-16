const twitterKeyFile = require("./keys.js");
const Twitter = require('twitter');
const spotify = require('spotify');
const request = require('request');
const fs = require('fs');


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
		
		var songTitle = "The Sign Ace of Base"


		console.log("\nThank you for using the Spotify Bot! \n\nPlease use the following command format:\n\nnode liri.js spotify-this-song 'song name here'\n\nEXAMPLE:  node liri.js spotify-this-song The Sign");

	}else{

	


	for(let i = 3; i < process.argv.length; i++){
						var buildSong = "";
						buildSong += process.argv[i];
	 }

	 var songTitle = buildSong;

	}

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
















else if(thisProgram === "movie-this"){
	console.log(`\n
		        _/_/_/_/_/  _/                 
                           _/      _/_/_/      _/_/    
                          _/      _/    _/  _/_/_/_/   
                         _/      _/    _/  _/          
                        _/      _/    _/    _/_/_/     
                                                       
                                                       
                                                                              
      _/      _/                        _/                _/_/_/    _/_/_/    
     _/_/  _/_/    _/_/    _/      _/        _/_/        _/    _/  _/    _/   
    _/  _/  _/  _/    _/  _/      _/  _/  _/_/_/_/      _/    _/  _/_/_/      
   _/      _/  _/    _/    _/  _/    _/  _/            _/    _/  _/    _/     
  _/      _/    _/_/        _/      _/    _/_/_/      _/_/_/    _/_/_/        
                                                                              

`);


	if(process.argv[3] === undefined){
		
		console.log("\nThank you for using the Movie Database Bot! \n\nPlease use the following command format:\n\nnode liri.js movie-this 'movie name here'\n\nEXAMPLE:  node liri.js movie-this Mr. Nobody");
		var movieTitle = "Mr. Nobody";
		console.log(movieTitle);
	}else{
		for(let i = 3; i < process.argv.length; i++){
							var buildTitle = "";
							buildTitle += process.argv[i];
		 }
		

		 var movieTitle = buildTitle;
		 }
		

		 var options = { method: 'GET',
		  url: 'https://api.themoviedb.org/3/search/movie',
		  qs: 
			   { include_adult: 'false',
			     page: '1',
			     query: movieTitle,
			     language: 'en-US',
			     api_key: '1a163b49c54b4f871f7f158b7e907c77' },
			  	 body: '{}' };

		

		request(options, function (error, response, body) {
  			if (error){
  			console.log("The database is currently down")
  			}else{
  			let movieBody = JSON.parse(body);
  			let firstResult = movieBody.results[0]
  				if(firstResult === undefined){
  					console.log("Hmmm... I don't know that movie. Is there a typo or spacing issue in your search? I'm a little picky!");
  				}else{


  				
  			console.log("Movie title: " + firstResult.title + 
  				"\n\nRelease date: " + firstResult.release_date +
  				"\n\nIMDB rating: " + firstResult.vote_average +
  				"\n\nCountry of Origin: Feature not found in this API" +
  				"\n\nOriginal Language: " + firstResult.original_language +
  				"\n\nPlot: " + firstResult.overview +
  				"\n\nActors: Feature not found in this API" +
  				"\n\nRotten Tomatoes Rating and URL : Feature not found in this API"
  				);
  			}
  		}
  		
		});


		}















else if(thisProgram === "do-what-it-says"){
	fs.readFile("random.txt", 'utf8', function(err, data) {
						if(err){
							console.log(error)
						}else {
							console.log(data);
					}
				}

			);
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

(these are fun!)
*/