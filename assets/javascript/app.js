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
    rotation: "1 Earth day and 6hours",
    dayLength: "1 Earth day and 6hours",
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

console.log(planets.neptune.rotation);

var userPlanet = "";
// Planet Info API
//var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/" + userPlanet;

// NASA API
var queryURLNASA =
  "https://images-api.nasa.gov/search?q=venus&media_type=image";
  //&api_key=j60JkOzXbADJPsSK8BOOcugy5DUcbod09yAgXDhx
//console.log(queryURL);

$(".planet").on("click", function() {
  var userPlanet = $(this).attr("data");
  var queryURL = "https://api.le-systeme-solaire.net/rest/bodies/" + userPlanet;
  console.log(userPlanet);
  console.log(queryURL);
});

// $.ajax({
//   url: queryURL,
//   method: "GET"
// }).then(function(response) {
//   console.log(response);
//   console.log(response.moons.length);
//   console.log(response.gravity);
//   console.log(response.aphelion);
//   console.log(response.perihelion);
// });

$.ajax({
  url: queryURLNASA,
  method: "GET"
}).then(function(responseNASA) {
  console.log(responseNASA);
});
