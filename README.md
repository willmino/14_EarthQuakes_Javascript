# 14_EarthQuakes_Javascript
Javascript and Geojson files to plot interactive maps

## Overview

This project used javscript code with an index.html file to produce an interactive webpage.

![earthquake_website_image](https://github.com/willmino/Mapping_Earthquakes/blob/main/webpage.png)

Maps were generated from the Mapbox API. (https://www.mapbox.com/)
Javascript code modules from Leaflet. (https://leafletjs.com/)


Using d3.json() function, API calls were made to obtain the following geoJSON data:

Earthquakes from the last 7 days (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

Tectonic Plate Fault Lines 9 (https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json)

Major Earthquake Data (magnitude > 4.5) (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson)


### Functions Nested and Declared in d3.json():
The styleInfo() function is declared within the d3.json() function hard codes features of each earthquake marker such as the opacity, stroke, weight, etc.
This function later calls the getColor() function and the getRadius() function. These functions use conditionals such as earthquake magnitude number to determine earthquake marker color and radius size on the map. These functions themselves are simply declared within the d3.json() function. The functions themselves are later called as the styleInfo() function is called within the L.geoJSON() function.


### Functions Nested in L.geoJSON():
The pointToLayer() function, nested in the L.geoJSON() function, created circlemakers corresponding to each earthquake on the map.

The bindPopup() function, itself nested in the onEachFeature() function, generated popup messages corresponding to each earthquake, when a user clicks on each marker.

### Legend
A map legend is created as the variable "legend" set equal to :
`L.control({position: "bottomright"});`.
This creates a box that holds all the legend contents. Each color box of the and corresponding magnitude value is then dynamically generated using a for loop nested in the legend.onAdd() function. The line `let div = L.DomUtil.create("div", "info legend");` allows for a division to be created for each box to obtain a specific color within the legend. The for loop then iterates through each magnitude of a possible earthquake, obtains its color from the boolean operational statement, and finally returns the resulting div element that is added to the legend object.

### Dynamics of the Website
Data obtained from geoJSON() functions were added to each respective layer on the map.
Layers are selectable in the dropdown menu in the upper right corner and can be selected to be turned on or off. When each layer is turned off, the corresponding data that was added to a specific layer is no longer dispplayed on the map.
They were specifically added to the map using the function <layer>.addTo(map).   Each <layer> is represented as the three values of the keys in the "overlays" variable. 
  
  Ex:
  `.addTo(tectonicPlates)`.    //The tectonicPlates layer is an object which can have data added to it.
  `tectonicPlates.addTo(map)`  //The map variable is an object which can also have data added to it. In this case, the tectonicPlates layer data is added                                //to the map.
  
 Also, selectable base layers of the map let you see streets (day time), satelliteStreets (night time), and outdoors versions of the actual map itself.
 Users may only select one base layer at a time. Users are not able to turn off the base layer.

