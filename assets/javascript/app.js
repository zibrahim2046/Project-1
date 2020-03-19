var planets = {
  mercury: {
    surfaceTempMin: "-290",
    surfaceTempMax: "800",
    rotation: "59 Earth days",
    dayLength: "176 Earth days",
    daysPerYear: "88 Earth days",
    link: "https://nineplanets.org/mercury/",
    size: "7 times less surface area than Earth",
    type: "Rocky, Terrestrial"
  },
  venus: {
    surfaceTempMin: "870",
    surfaceTempMax: "870",
    rotation: "243 Earth days",
    dayLength: "225 Earth days",
    daysPerYear: "225 Earth days",
    link: "https://nineplanets.org/venus/",
    size: "10% less surface area than Earth",
    type: "Rocky, Terrestrial"
  },
  earth: {
    surfaceTempMin: "-129",
    surfaceTempMax: "136",
    rotation: "1 Earth days",
    dayLength: "1 Earth days",
    daysPerYear: "365 Earth days",
    link: "https://nineplanets.org/earth/",
    size: "",
    type: "Rocky, Terrestrial"
  },
  mars: {
    surfaceTempMin: "-195",
    surfaceTempMax: "70",
    rotation: "1 Earth day and 6 hours",
    dayLength: "1 Earth day and 6 hours",
    daysPerYear: "669 Earth days",
    link: "https://nineplanets.org/mars/",
    size: "Just over 1/2 the surface area of Earth",
    type: "Rocky, Terrestrial"
  },
  jupiter: {
    surfaceTempMin: "(Atmosphere) -229",
    surfaceTempMax: "(Core) 64,292",
    rotation: "10 hours",
    dayLength: "10 hours",
    daysPerYear: "12 Earth years",
    link: "https://nineplanets.org/jupiter/",
    size: "122 times more surface area than Earth",
    type: "Gas Giant"
  },
  saturn: {
    surfaceTempMin: "(Atmosphere) -288",
    surfaceTempMax: "(Core) 21,092",
    rotation: "10.6 hours",
    dayLength: "10.6 hours",
    daysPerYear: "29.5 Earth years",
    link: "https://nineplanets.org/saturn/",
    size: "83 times more surface area than Earth",
    type: "Gas Giant"
  },
  uranus: {
    surfaceTempMin: "(Atmosphere) -371",
    surfaceTempMax: "(Core) 8559",
    daysPerYear: "84 Earth years",
    link: "https://nineplanets.org/uranus/",
    size: "16 times more surface area than Earth",
    type: "Ice Giant"
  },
  neptune: {
    surfaceTempMin: "(Atmosphere) -360",
    surfaceTempMax: "(Core) 12632",
    rotation: "16 hours",
    dayLength: "16 hours",
    daysPerYear: "165 Earth years",
    link: "https://nineplanets.org/neptune/",
    size: "15 times more surface area than Earth",
    type: "Ice Giant"
  },
  pluto: {
    surfaceTempMin: "-400",
    surfaceTempMax: "-375",
    rotation: "153 hours",
    dayLength: "153 hours",
    daysPerYear: "248 Earth years",
    link: "https://nineplanets.org/pluto/",
    size: "30 times less surface area than Earth",
    type: "Dwarf"
  }
};

// console.log(planets.neptune.rotation);

var userPlanet = "";
var planetImg = [];

function clearStorage() {
  localStorage.removeItem("plantImg");
  
}

$(".planet").on("click", function() {
  userPlanet = $(this).attr("data");
  localStorage.setItem("userPlanet", userPlanet);
  var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/" + userPlanet;
  
  firstAPI();
  secondAPI();
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

    var planetLink = $("<p class ='facts'>");
    h = planets[userPlanetStored].link
    planetLink.prepend("Type of Planet:  " + h);
    factsDiv.append(planetType);

    $(".theFacts").prepend(factsDiv)
// })

}





