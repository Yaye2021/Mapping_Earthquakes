// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//We're assigning the variable map to the object L.map()
//The mapid will reference the id tag in our <div> element on the index.html file.
//The setView() method sets the view of the map with a geographical center, 
//let map = L.map('mapid').setView([36.1733, -120.1794], 7);

// Create the map object with center at the San Francisco airport.
let map = L.map('mapid').setView([37.6213, -122.3790], 5);

//Coordinates for each point to be used in the polyline
// let line = [
//     [33.9416, -118.4085],
//     [37.6213, -122.3790]
// ];

//Adding multiple lines
// Coordinates for each point to be used in the polyline.
let line = [
    [33.9416, -118.4085],
    [37.6213, -122.3790],
    [40.7899, -111.9791],
    [47.4502, -122.3088]
  ];

//Create the polyline using the coordinates and make the line red

L.polyline(line, {
    color: "yellow"
}).addTo (map); 

// We create the tile layer that will be the background of our map.
// This code is for black background
// let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",{
//         attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//         tileSize: 512,
//         maxZoom: 18,
//         zoomOffset: -1,
//         id: "mapbox/streets-v11",
//         accessToken: API_KEY
//     }); 
    
// This code is for a normal background
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/satellite-streets-v11",
    accessToken: API_KEY
});
// Then we add our 'streets tile layer to the map
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California and defining it as a circle
// L.circleMarker([34.0522, -118.2437], {
//     color: "black",
//     fillColor: '#ffffa1',
//     radius: 300
//  }).addTo(map);

//Get data from cities.js
// let cityData = cities;
// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//     console.log(city)
//     //L.marker(city.location)
//     //Instead of a marker, changing to circlemarker
//     //with th radius of every population
//     L.circleMarker(city.location, {
//         radius: city.population/100000
//     })

//     // Add a popup in every marker
//     .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//     .addTo(map);
//    });