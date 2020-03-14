// Home HTML (Define purpose, outline functions of site, navigate to other pages)

// Create HTML(s) for each planet M,V,E,M,J,S,U,N,P

// Distance, Facts, Images, Video, Rocket Info (Maybe speed of light)

// Set up layout style (css, bootstrap, etc..)

// Research API's

// Define Variables

// Set onCLick functions

// Code the AJAX API Call

// Research different rockets, distances to planets, facts on each planet etc..

// Compare/Contrast Rocket Specs (Starship1/SpaceX), (SLS/NASA), ()


















// NASA API Key
var queryURL = "https://api.nasa.gov/planetary/apod?api_key=qOQWT3kOVH0hl4NkLUHSfu1yPdUkgK35QHeAwqxI"

// AJAX call 
$.ajax({
    url: queryURL,
    method: "GET"
});

// Define Variables

var rocketType
var rocketSpeed
var targetPlanet
var targetDistance
var planetInfo
var currentDate
