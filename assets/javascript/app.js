var planets = {
  mercury: {
    surfaceTempMin: "-290",
    surfaceTempMax: "800",
    rotation: "59 Earth days",
    dayLength: "176 Earth days",
    daysPerYear: "88 Earth days",
    link: "https://nineplanets.org/mercury/",
    size: "7 times less surface area than Earth",
    type: "Rocky, Terrestrial",
    distance: "78 million miles",
    travelTime: "130 days",
    name: "Mercury",
  },
  venus: {
    surfaceTempMin: "870",
    surfaceTempMax: "870",
    rotation: "243 Earth days",
    dayLength: "225 Earth days",
    daysPerYear: "225 Earth days",
    link: "https://nineplanets.org/venus/",
    size: "10% less surface area than Earth",
    type: "Rocky, Terrestrial",
    distance: "69 million miles",
    travelTime: "115 days",
    name: "Venus"

  },
  earth: {
    surfaceTempMin: "-129",
    surfaceTempMax: "136",
    rotation: "1 Earth days",
    dayLength: "1 Earth days",
    daysPerYear: "365 Earth days",
    link: "https://nineplanets.org/earth/",
    size: "",
    type: "Rocky, Terrestrial",
    
  },
  mars: {
    surfaceTempMin: "-195",
    surfaceTempMax: "70",
    rotation: "1 Earth day and 6hours",
    dayLength: "1 Earth day and 6hours",
    daysPerYear: "669 Earth days",
    link: "https://nineplanets.org/mars/",
    size: "Just over 1/2 the surface area of Earth",
    type: "Rocky, Terrestrial",
    distance: "145 million miles",
    travelTime: "241 days",
    name: "Mars"
  },
  jupiter: {
    surfaceTempMin: "(Atmosphere) -229",
    surfaceTempMax: "(Core) 64,292",
    rotation: "10 hours",
    dayLength: "10 hours",
    daysPerYear: "12 Earth years",
    link: "https://nineplanets.org/jupiter/",
    size: "122 times more surface area than Earth",
    type: "Gas Giant",
    distance: "512 million miles",
    travelTime: "853 days",
    name: "Jupiter"
  },
  saturn: {
    surfaceTempMin: "(Atmosphere) -288",
    surfaceTempMax: "(Core) 21,092",
    rotation: "10.6 hours",
    dayLength: "10.6 hours",
    daysPerYear: "29.5 Earth years",
    link: "https://nineplanets.org/saturn/",
    size: "83 times more surface area than Earth",
    type: "Gas Giant",
    distance: "973 million miles",
    travelTime: "1621 days",
    name: "Saturn"
  },
  uranus: {
    surfaceTempMin: "(Atmosphere) -371",
    surfaceTempMax: "(Core) 8559",
    daysPerYear: "84 Earth years",
    link: "https://nineplanets.org/uranus/",
    size: "16 times more surface area than Earth",
    type: "Ice Giant",
    distance: "1.9 billion miles",
    travelTime: "3166 days",
    name: "Uranus"
  },
  neptune: {
    surfaceTempMin: "(Atmosphere) -360",
    surfaceTempMax: "(Core) 12632",
    rotation: "16 hours",
    dayLength: "16 hours",
    daysPerYear: "165 Earth years",
    link: "https://nineplanets.org/neptune/",
    size: "15 times more surface area than Earth",
    type: "Ice Giant",
    distance: "2.8 billion miles",
    travelTime: "4666 days",
    name: "Neptune"
  },
  pluto: {
    surfaceTempMin: "-400",
    surfaceTempMax: "-375",
    rotation: "153 hours",
    dayLength: "153 hours",
    daysPerYear: "248 Earth years",
    link: "https://nineplanets.org/pluto/",
    size: "30 times less surface area than Earth",
    type: "Dwarf",
    distance: "3.2 billion miles",
    travelTime: "5333 days",
    name: "Pluto"
  }
};

// console.log(planets.neptune.rotation);
var avgRocketSpeed = 25000;
var userPlanet = "";
var planetImg = [];

function clearStorage() {
  localStorage.removeItem("plantImg");
  
}


$(".planet").on("click", function() {
  userPlanet = $(this).attr("data");
  localStorage.setItem("userPlanet", userPlanet);
  var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/" + userPlanet;
  console.log(userPlanet);
  firstAPI();
  secondAPI();
});



function firstAPI() {
  var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/" + userPlanet;
    // console.log(userPlanet);
    // console.log(queryURL);

  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    if (userPlanet === "mercury" || userPlanet === "venus") {
      localStorage.setItem("moons", 0);
      localStorage.setItem("gravity", response.gravity);
      localStorage.setItem("aphelion", response.aphelion);
      localStorage.setItem("perihelion", response.perihelion);
    } else {
      localStorage.setItem("moons", response.moons.length);
      localStorage.setItem("gravity", response.gravity);
      localStorage.setItem("aphelion", response.aphelion);
      localStorage.setItem("perihelion", response.perihelion);
    }
    // console.log(response);
    // console.log(response.moons.length);
    // console.log(response.gravity);
    // console.log(response.aphelion);
    // console.log(response.perihelion);
  });

}

function secondAPI() {
  
  var queryURLNASA = "https://images-api.nasa.gov/search?q=" + userPlanet + "&media_type=image";
  // console.log(userPlanet);

  $.ajax({
    url: queryURLNASA,
    method: "GET"
  }).then(function(responseNASA) {
    
    for(var i = 0; i < 4; i++) {
      image = responseNASA.collection.items[i].links[0].href;
      planetImg.push(image);
      // console.log(planetImg[i]);
      localStorage.setItem("planetImg", JSON.stringify(planetImg));
  
    }
    
  });

}

function imgPush() {
// $(document).on("click",".imgPic",function() {
  planetImg = JSON.parse(localStorage.getItem("planetImg"));
  console.log(planetImg);
  userPlanetStored = localStorage.getItem("userPlanet");
  
  for (var j = 0; j < 4; j++) {
    
    console.log(planetImg[j]);
    var picDiv = $("<div class = 'planet-imgs'>");
    var planetImgTag = $("<img class = 'display-images'>");
    planetImgTag.attr("src", planetImg[j]);
    planetImgTag.addClass("pic");
    
    picDiv.prepend(planetImgTag);
    $(".planet-images").prepend(picDiv);
  }
    var factsDiv = $("<div class = 'theFacts'>");
    
    var moonsDiv = $("<p class = 'facts'>");
    moonsDiv.prepend("Number of Moons:  " + localStorage.getItem("moons"));
    factsDiv.prepend(moonsDiv)

    var minTemp = $("<p class ='facts'>");
    a = planets[userPlanetStored].surfaceTempMin
    minTemp.prepend("Maximum Temperature:  " + a + "<sup>'o'</sup>'F'");
    factsDiv.append(minTemp);

    $(".theFacts").prepend(factsDiv)
// })

}

function launchInfo () {
  destinationPlanet = localStorage.getItem("userPlanet");
  var launchDiv = $("<div class = 'launch'>")
  var planetDistance = $("<p class = 'facts'>");
    planetDistance.prepend("Distance to  "+ planets[destinationPlanet].name + " is "+ planets[destinationPlanet].distance+"."); 
    launchDiv.prepend(planetDistance);
    //var launchDiv = $("<div class = 'launch'>");
    var travelTime = $("<p class = 'facts'>");
    travelTime.append("It will take you "+  " " + planets[destinationPlanet].travelTime + " to reach " + destinationPlanet);
    launchDiv.append(travelTime);
$(".theLaunch").append(launchDiv);
$(".theLaunch").prepend(launchDiv);
var 


}

var currentDate= moment().format('MMMM Do YYYY, h:mm:ss a');
console.log(currentDate);

var arrivalDate = moment().add(130, 'days')
console.log(arrivalDate);









