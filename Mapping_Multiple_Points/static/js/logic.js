// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map("mapid", {
    center: [
      34.0522, -118.2437
    ],
    zoom: 4
  });
// Get data from cities.js
let cityData = cities;

cityData.forEach(function(city){
  console.log(city)
  L.circleMarker(city.location, {
    radius: city.population/100000
  })
  .bindPopup("<h2>" + city.city + "," + city.state + "</h2> <hr> <h3> Population " + city.population.toLocaleString() + "</h3>")
  .addTo(map);
});

  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}' ,{
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);

/*

Update Leaflet Style accordingly

Street View (Default)
https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles

Outside of circle is dark, inside of circle is yellow.
https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/


*/


