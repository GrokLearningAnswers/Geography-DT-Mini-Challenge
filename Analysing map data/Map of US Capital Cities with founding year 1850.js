let map = loadMap('map', [40, -100], 3);

function addCity(city) {
    if(city.founded > 1850) {
        let marker = addMarker(map, [city.latitude, city.longitude], {
            popup: city.name,
        })
        return marker;
    }
}

function addCities(cities) {
    cities.forEach(addCity);
}

fetch('us-capital-cities-by-year.json')
    .then(function(response) {
        return response.json();
    })
    .then(addCities);