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
    clothesDay: "Shorts and a tanktop, but mainly a spacesuit during the day",
    clothesNight: "Biggest snowsuit you can find, but mainly a spacesuit at night",
    sunscreen: "SPF 10,000 Sunscreen"
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
    name: "Venus",
    clothesDay: "Shorts and a tanktop, but mainly a spacesuit during the day",
    clothesNight: "Shorts and a tanktop, but mainly a spacesuit during the day",
    sunscreen: "SPF 10,000 Sunscreen"
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
    name: "Mars",
    clothesDay: "Jeans and a funny tshirt, but mainly a spacesuit during the day",
    clothesNight: "Biggest snowsuit you can find, but mainly a spacesuit at night",
    sunscreen: "SPF 50 Sunscreen"
    
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
    name: "Jupiter",
    clothesDay: "If you stay in the atmosphere stay in your spacesuit",
    clothesNight: "See above and don't even think about going near the core",
    sunscreen: "You won't even remember the sun exists"
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
    name: "Saturn",
    clothesDay: "If you stay in the atmosphere stay in your spacesuit",
    clothesNight: "See above and don't even think about going near the core",
    sunscreen: "You won't even remember the sun exists"
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
    name: "Uranus",
    clothesDay: "You'd think ice skates with it being an ice giant but stay in your spacesuit",
    clothesNight: "See above and don't even think about going near the core",
    sunscreen: "You won't even remember the sun exists"
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
    name: "Neptune",
    clothesDay: "No ice skates here, stay in your spacesuit",
    clothesNight: "See above and don't even think about going near the core",
    sunscreen: "You won't even remember the sun exists"
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
    name: "Pluto",
    clothesDay: "Apologize to Pluto for not being a full fledged planet anymore and wear your spacesuit",
    clothesNight: "Do the same thing you do during the day",
    sunscreen: "You won't even remember the sun exists"
  }
};

// console.log(planets.neptune.rotation);

var userPlanet = "";
var planetImg = [];
var planetPicked = false;
var rocketPicked = false;

function clearStorage() {
  localStorage.removeItem("planetImg");
  
}

$(".planet-container").on("click", function() {
  $(".userChoice").empty();
  userPlanet = $(this).attr("data");
  planetPicked = true;
  // console.log(userPlanet);
  // console.log(this);
  localStorage.setItem("userPlanet", userPlanet);
  var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/" + userPlanet;
  var planetChoiceDiv = $("<div>");
  planetChoiceDiv.prepend(this);
  $(".userChoice").append(planetChoiceDiv);

  firstAPI();
  secondAPI();
  
  var startOverDiv = $("<h4>");
    startOverDiv.text("Start Over?");
    $(".newTrip").append(startOverDiv);
  
  if (rocketPicked === true) {
    var readyDiv = $("<h4>");
    readyDiv.text("LAUNCH");
    $(".ready").append(readyDiv);
  }
});

$(document).on("click", ".theRockets", function() {
  $(".rocketChoice").empty();
  rocketPicked = true;
  var rocketChoiceDiv = $("<div>");
  rocketChoiceDiv.prepend(this);
  $(".rocketChoice").append(rocketChoiceDiv);

  if (planetPicked === true) {
    var readyDiv = $("<h4>");
    readyDiv.text("LAUNCH");
    $(".ready").append(readyDiv);
  }
});



function firstAPI() {
  var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/" + userPlanet;
    

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
      
      localStorage.setItem("planetImg", JSON.stringify(planetImg));
  
    }
    
  });

}

function imgPush() {
  planetImg = JSON.parse(localStorage.getItem("planetImg"));
  userPlanetStored = localStorage.getItem("userPlanet");
  
  var jTron = $("<h1 class = 'display-4'>")
  jTron.text(planets[userPlanetStored].name);
  $(".for-jtron").append(jTron);

  for (var j = 0; j < 4; j++) {
    
    var picDiv = $("<div class = 'planet-imgs'>");
    var planetImgTag = $("<img class = 'display-images'>");
    planetImgTag.attr("src", planetImg[j]);
    planetImgTag.addClass("pic");
    
    picDiv.prepend(planetImgTag);
    $(".planet-images").prepend(picDiv);
  }
    var factsDiv = $("<div class = 'theFacts'>");
    
    var moonsPar = $("<p class = 'facts'>");
    moonsPar.prepend("Number of Moons:  " + localStorage.getItem("moons"));
    factsDiv.prepend(moonsPar);

    var gravityPar = $("<p class = 'facts'>");
    gravityPar.prepend("Gravity:  " + localStorage.getItem("gravity") + " m/s <sup>2</sup>");
    factsDiv.append(gravityPar);

    var minTemp = $("<p class ='facts'>");
    a = planets[userPlanetStored].surfaceTempMin;
    minTemp.prepend("Minimum Temperature:  " + a + "<sup>o</sup>F");
    factsDiv.append(minTemp);

    var maxTemp = $("<p class ='facts'>");
    b = planets[userPlanetStored].surfaceTempMax;
    maxTemp.prepend("Maximum Temperature:  " + b + "<sup>o</sup>F");
    factsDiv.append(maxTemp);

    var rotate = $("<p class ='facts'>");
    c = planets[userPlanetStored].rotation;
    rotate.prepend("Rotation:  " + c);
    factsDiv.append(rotate);

    var day = $("<p class ='facts'>");
    d = planets[userPlanetStored].dayLength;
    day.prepend("length of day:  " + d);
    factsDiv.append(day);

    var year = $("<p class ='facts'>");
    e = planets[userPlanetStored].daysPerYear;
    year.prepend("Days per year:  " + e);
    factsDiv.append(year);

    var howBig = $("<p class ='facts'>");
    f = planets[userPlanetStored].size;
    howBig.prepend("Size:  " + f);
    factsDiv.append(howBig);

    var planetType = $("<p class ='facts'>");
    g = planets[userPlanetStored].type
    planetType.prepend("Type of Planet:  " + g);
    factsDiv.append(planetType);

    var aphelionPar = $("<p class = 'facts'>");
    var aphelionDisMiles = parseInt(localStorage.getItem("aphelion") * .621371);
    var y = aphelionDisMiles.toLocaleString();
    aphelionPar.prepend("Furthest distance from the Sun:  " + y + " Miles");
    factsDiv.append(aphelionPar);

    var perihelionPar = $("<p class = 'facts'>");
    var perihelionDisMiles = parseInt(localStorage.getItem("perihelion") * .621371)
    var x = perihelionDisMiles.toLocaleString();
    perihelionPar.prepend("Shortest distance from the Sun:  " + x + " Miles");
    factsDiv.append(perihelionPar);

    var planetLink = $("<a>");
    link = planets[userPlanetStored].link;
    console.log(link);
    planetLink.attr("href", link);
    planetLink.text("More Facts");
    planetLink.addClass("link");
    factsDiv.append(planetLink);

    $(".theFacts").prepend(factsDiv)

    var toBring = $("<ul>");

    var dayClothes = $("<li>");
    dayClothes.prepend(planets[userPlanetStored].clothesDay);
    toBring.append(dayClothes);

    var nightClothes = $("<li>");
    nightClothes.prepend(planets[userPlanetStored].clothesNight);
    toBring.append(nightClothes); 

    var SPF = $("<li>");
    SPF.prepend(planets[userPlanetStored].sunscreen);
    toBring.append(SPF);

    $(".bringItems").append(toBring);

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

};

// var currentDate= moment().format('MMMM Do YYYY, h:mm:ss a');
// console.log(currentDate);

// var arrivalDate = moment().add(130, 'days')
// console.log(arrivalDate);







