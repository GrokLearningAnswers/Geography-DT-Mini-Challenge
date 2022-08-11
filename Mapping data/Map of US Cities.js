let map = loadMap('map', [40, -100], 3);

function addCity(city) {
    let marker = addMarker(map, [city.latitude, city.longitude], {
        popup: city.name,
    })
    return marker;
}

function addCities(cities) {
    cities.forEach(addCity);
}

fetch('us-capital-cities.json')
    .then(function(response) {
        return response.json();
    })
    .then(addCities);