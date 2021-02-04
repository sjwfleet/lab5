var data = require("../data.json");

exports.addFriend = function(request, response) {    
	// Your code goes here
	var friend = {"name" : request.query.name, "description": request.query.description, "imageURL": "http://lorempixel.com/400/400/people"};

	console.log("friend" + friend);

	data.friends.push(friend);
	response.render("index", data);
 }