let map = loadMap('map', [-35, 145], 3);

function addCity(city) {
    if(city.population > 100000) {
        let marker = addMarker(map, [city.latitude, city.longitude], {
            popup: city.name,
        })
        return marker;
    }
}

function addCities(cities) {
    cities.forEach(addCity);
}

fetch('australian-cities.json')
    .then(function(response) {
        return response.json();
    })
    .then(addCities);