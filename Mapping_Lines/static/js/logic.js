// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([37.6214, -122.3790], 5);
// Get data from cities.js
let cityData = cities;

let line = [
  [37.6213, -122.3790],
  [30.1975, -97.6664],
  [43.6777, -79.6248],
  [40.6413, -73.7781]
];


cityData.forEach(function(city){
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/{z}/{x}/{y}?access_token={accessToken}' ,{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a polyline using the line coordinates and make the line red.
L.polyline(line, {
  color: "blue",
  weight:4,
  opacity:0.5,
  dashArray: '10,10'


}).addTo(map);
// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

/*

Update Leaflet Style accordingly

Street View (Default)
https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles

Outside of circle is dark, inside of circle is yellow.
https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/


*/


