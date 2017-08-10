// Technical Requirements 

// - Call ```$.val()``` on inputs to get the string value of your user's input
// - Store user input in ```var city```
// - Use `.submit()`or ```$.click``` to figure out when the user clicks the "submit" button
// - Create ```if / else if / else``` conditionals to control the flow of your application
// - Write at least six different lines of pseudocode and display them inline as JavaScript comments
// - Prevent a page refresh using the ```event.preventDefault()``` function
// - Use the ```$.ready()``` handler to delay your code from executing until all DOM assets have been loaded
// - Get the first element from an attribute name using ```$.attr()```
// - Use the ```||``` operator in your conditionals to allow for multiple string values to execute ```if/else if``` statement code
// - If a user submits:

//   - "New York" or "New York City" or "NYC" make the background of the page nyc.jpg
//   - "San Francisco" or "SF" or "Bay Area" make the background of the page sf.jpg
//   - "Los Angeles" or "LA" or "LAX" make the background of the page la.jpg
//   - "Austin" or "ATX" make the background of the page austin.jpg
//   - "Sydney" or "SYD" make the background of the page sydney.jpg
// 


$(document).ready(function(){

	$("#submit-btn").click(update); //user clicks submit to trigger the function "update"

	function update(){
		
		event.preventDefault();
		var city = $("#city-type").val(); //user can enter a variable city in the input field

		//if the city is NYC or a variation, then change the body attribute to images/nyc.jpg
		if (city == "nyc" || city =="NYC" || city == "New York City"){  
			$("body").attr("class", "nyc");
		}

		//if the city is sf or a variation, then change the body attribute to images/sf.jpg
		else if (city == "sf" || city == "Bay Area"){
			$("body").attr("class", "sf");
		}

		//if the city is LA or a variation, then change the body attribute to images/la.jpg
		else if (city == "LA" || city == "LAX"){
			$("body").attr("class", "la");
		}

		//if the city is austin or a variation, then change the body attribute to images/austin.jpg
		else if (city == "Austin" || city == "ATX"){
			$("body").attr("class", "austin");
		}

		//if the city is Sydney or a variation, then change the body attribute to images/sydney.jpg
		else if (city == "Sydney" || city == "SYD"){
			$("body").attr("class", "sydney");
		}

	}

});