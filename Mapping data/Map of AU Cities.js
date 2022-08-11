let map = loadMap('map');

function addCity(city) {
    let marker = addMarker(map, [city.latitude, city.longitude], {
        popup: city.name,
    })
    return marker;
}

function addCities(cities) {
    cities.forEach(addCity);
}

fetch('australian-cities.json')
    .then(function(response) {
        return response.json();
    })
    .then(addCities);