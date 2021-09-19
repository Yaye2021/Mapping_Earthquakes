// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//We're assigning the variable map to the object L.map()
//The mapid will reference the id tag in our <div> element on the index.html file.
//The setView() method sets the view of the map with a geographical center, 
let map = L.map('mapid').setView([40.7, -94.5], 14);

// We create the tile layer that will be the background of our map.
// This code is for black background
let streets = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}",{
        attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
        tileSize: 512,
        maxZoom: 18,
        zoomOffset: -1,
        id: "mapbox/streets-v11",
        accessToken: API_KEY
    }); 
    
// This code is for a normal background
// let streets = L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//     attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//     tileSize: 512,
//     maxZoom: 18,
//     zoomOffset: -1,
//     id: "mapbox/streets-v11",
//     accessToken: API_KEY
// });
// Then we add our 'streets tile layer to the map
streets.addTo(map);

//  Add a marker to the map for Los Angeles, California and defining it as a circle
L.circleMarker([34.0522, -118.2437], {
    color: "black",
    fillColor: '#ffffa1',
    radius: 300
 }).addTo(map);


