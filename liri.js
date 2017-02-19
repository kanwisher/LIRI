const twitterKeyFile = require("./keys.js");
const Twitter = require('twitter');
const spotify = require('spotify');
const request = require('request');
const fs = require('fs');





if (process.argv[3] !== undefined){
	var buildQuery = "";
	for(let i = 3; i < process.argv.length; i++){
	buildQuery += process.argv[i] + " ";
							
				}
}else{
	buildQuery = "";
	
}





let userProgram = process.argv[2];
let userQuery = buildQuery;
let commandString = "node " + userProgram + " " +  userQuery;






if(userProgram === undefined){


	console.log(`


:::        ::::::::::: :::::::::  ::::::::::: 
:+:            :+:     :+:    :+:     :+:     
+:+            +:+     +:+    +:+     +:+     
+#+            +#+     +#++:++#:      +#+     
+#+            +#+     +#+    +#+     +#+     
#+#            #+#     #+#    #+#     #+#     
########## ########### ###    ### ########### ` + "\n\nWelcome to LIRI. I have become sentient. What would you like for me to do for you today? \n\nMy current abilities are:\n\nmy-tweets\nspotify-this-song\nmovie-this\ndo-what-it-says")

}else{


commandRunner(userProgram, userQuery);


}








function commandRunner(program, query){
	if(program ==="my-tweets"){
		fs.appendFile("log.txt", commandString + "\n\n")
		runTweets(query);

	}else if(program ==="spotify-this-song"){
		fs.appendFile("log.txt", commandString + "\n\n")
		runSpotify(query);

	}else if(program === "movie-this"){
		fs.appendFile("log.txt", commandString + "\n\n")
		runMovies(query);

	}else if(program === "do-what-it-says"){
		fs.appendFile("log.txt", commandString + "\n\n")
		runMystery();

	}else{
		
		console.log("Not a valid command. Please try my-tweets, spotify-this-song, movie-this, or do-what-it-says");
	}
}








function runTweets(query){

	let client = new Twitter(twitterKeyFile.twitterKeys);
	
	let params = {
		screen_name: query,
	    count: 10
			  };


		console.log(`
     .,,,,,,,.                         
    .,:,,,,,,,,.                        
    .:,,,,,,,,:,.                       
    .:,,,,,,,::,.                       
    .:,,:::,,::,.                       
   ..::::::,:::,.                       
   ..::::::::::,,.................      
   ..:::::::::::,,,,,,,,,,,,,,,,,:,.    
   ..::::::::::::,:,,::,:,:,,,:,::::,.  
   .,::::::::::::::::::::::::::::::::.  
   ..:~::::::::::::::::::::::::::::::.  
   .,::::::::::::::::::::::::::::::::.  
    .::~:::~::::::::::::::::::::::::.    
   ..:~~::::~:~~:::::::::::::::::,,.    
   .,~::~:~:~~::..................      
   ..:~~~~::~~~:.                       
   .,~~~~~~~~~~:.                       
   ..~~~~~~~~~~:.                       
   ..~~~~~~~~~~~.                       
    .:~~~~~~~~~~:..                      
    .,~~~~~~~~~~~~:,,,,,,,,,,,.,...     
     .:~~~~~~~~~~~~~=~=~~~~~~~~~~~:,.   
     .,:=~~~~~~~~~~~~~~~~~~~~~~~~~~=:.  
       .:~=~=~~=~~~=~~~=~~=~~~~~==~=~,  
        .:~======~==~==~=~~========~~,  
         .,:~=======================~.  
           ..:~~==================~~..  
              ...,,::::::::::::::,..    
		`);

	if(query === ""){
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
		  		fs.appendFile("log.txt", buildString + "\n")
		  		
		  		
		  	});
			}else if (error){
				console.log("\n    Username was not found \n\n Please use the following format:\n\n node liri.js my-tweets TWITTERUSERNAME");
			}

		});
	}

}











function runSpotify(query){

	console.log(`


 _______  _______  _______  _______  ___  _______  __   __ 
|       ||       ||       ||       ||   ||       ||  | |  |
|  _____||    _  ||   _   ||_     _||   ||    ___||  |_|  |
| |_____ |   |_| ||  | |  |  |   |  |   ||   |___ |       |
|_____  ||    ___||  |_|  |  |   |  |   ||    ___||_     _|
 _____| ||   |    |       |  |   |  |   ||   |      |   |  
|_______||___|    |_______|  |___|  |___||___|      |___|  


`);
	var songTitle = "";
	

	if(query === ""){
		
		songTitle = "The Sign Ace of Base"


		console.log("\nThank you for using the Spotify Bot! \n\nPlease use the following command format:\n\nnode liri.js spotify-this-song 'song name here'\n\nEXAMPLE:  node liri.js spotify-this-song The Sign");

	}else{

		 songTitle = query;
		 console.log(query);
		}

	spotify.search({ 
		type: 'track',
		query: songTitle

		}, function(err, data) {
		    if ( err ) {
		        console.log('Error occurred: ' + err);
		        return;
		    }else{
		    	
		    
		 	let songInfo = data.tracks.items[0];
		 	let allSongInfo = "Artist(s): " + songInfo.album.artists[0].name +
		    	"\nSong's Name: " + songInfo.name +
		    	"\nPreview Song: " + songInfo.preview_url +
		    	"\nAlbum: " + songInfo.album.name;
		    console.log(allSongInfo);
		    fs.appendFile("log.txt", allSongInfo + "\n\n")
		
			}
	
		});
	
	}
















function runMovies(query){
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

	var movieTitle = ""
	if(query === ""){
		
		console.log("\nThank you for using the Movie Database Bot! \n\nPlease use the following command format:\n\nnode liri.js movie-this 'movie name here'\n\nEXAMPLE:  node liri.js movie-this Mr. Nobody");
		movieTitle = "Mr. Nobody";
		
	}else{
		for(let i = 3; i < process.argv.length; i++){
							var buildTitle = "";
							buildTitle += process.argv[i];
		 }
		

		 movieTitle = buildTitle;
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


  			let allMovieInfo = "Movie title: " + firstResult.title + 
  				"\n\nRelease date: " + firstResult.release_date +
  				"\n\nIMDB rating: " + firstResult.vote_average +
  				"\n\nCountry of Origin: Feature not found in this API" +
  				"\n\nOriginal Language: " + firstResult.original_language +
  				"\n\nPlot: " + firstResult.overview +
  				"\n\nActors: Feature not found in this API" +
  				"\n\nRotten Tomatoes Rating and URL : Feature not found in this API";
  			
  			console.log(allMovieInfo);

  			fs.appendFile("log.txt", allMovieInfo + "\n\n")
  			}
  		}
  		
		});


}















function runMystery(){
	fs.readFile("random.txt", 'utf8', function(err, data) {
						if(err){
							console.log(error)
						}else {
							textArray = data.split(",");
							
							commandRunner(textArray[0], textArray[1])
							
						}
				

			});
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