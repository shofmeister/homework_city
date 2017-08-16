
$(document).ready(function(){

event.preventDefault();
	
var city = ["New York City", "San Francisco", "Los Angeles", "Austin", "Sydney"];
var cities = city.length;

//add cities from var city after the first <option> in the drop down
for (index = 0; index < city.length; index++){
	$("select").append("<option>"+city[index]+"</option>");
	console.log("index", index, "value", city[index]);
}

$("#city-type").change(update);
//when the user selects a city from the drop down, run the update function

function update(){
	
	var city = $("#city-type").val();	

	//if the city is NYC then change the body class "nyc"
	if (city == "New York City"){  
		$("body").attr("class", "nyc");
	}

	//if the city is sf or a variation, then change the body class to "sf"
	else if (city == "San Francisco"){
		$("body").attr("class", "sf");
	}

	//if the city is LA or a variation, then change the body class to "la"
	else if (city == "Los Angeles"){
		$("body").attr("class", "la");
	}

	//if the city is austin or a variation, then change the body class to austin
	else if (city == "Austin"){
		$("body").attr("class", "austin");
	}

	//if the city is Sydney or a variation, then change the body class to sydney
	else if (city == "Sydney"){
		$("body").attr("class", "sydney");
	}

}

});