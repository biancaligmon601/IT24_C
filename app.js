var map = L.map('map').setView([8.359581, 124.868626], 19);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


// Create a circle
var circle = L.circle([8.359581, 124.868626], {
    color: 'pink',
    fillColor: 'rgba(230, 11, 164, 1)',
    fillOpacity: 0.5,
    radius: 500
}).addTo(map);

// Create a polygon
var polygon = L.polygon([
    [8.359581, 124.868626],
    [8.359581, 124.868626],
    [8.359581, 124.868626]
]).addTo(map);

// Create a marker
var marker = L.marker([8.359581, 124.868626]).addTo(map);


// Working with Pops
marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
circle.bindPopup("I am a circle.");
polygon.bindPopup("I am a polygon.");


// Stand alone pop up
var popup = L.popup()
    .setLatLng([8.359581, 124.868626])
    .setContent("I am a standalone popup.")
    .openOn(map);

// Dealing with events
// function onMapClick(e) {
//     alert("You clicked the map at " + e.latlng);
// }

// map.on('click', onMapClick);

var popup = L.popup();

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);
