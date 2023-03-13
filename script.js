var map = L.map('map').setView([50.1025, 14.407190], 13);
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);
var greenIcon = L.icon({
    iconUrl: 'Pictures/wedding-location-svgrepo-com.svg',
    iconSize:     [46, 46], // size of the icon
    iconAnchor:   [23, 46], // point of the icon which will correspond to marker's location
  //  popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
});
L.marker([50.1025, 14.407190], {icon: greenIcon}).addTo(map);