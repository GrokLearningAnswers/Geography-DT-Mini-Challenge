let map = loadMap('map');

function addCity(city) {
    let colour;
    if (city.population >= 100000) {
        colour = 'red';
    } else if (city.population >= 10000) {
        colour = 'yellow';
    } else {
        colour = 'green';
    }

    let marker = addMarker(map, [city.latitude, city.longitude], {
        popup: `${city.name} - founded in ${city.founded}`,
        colour: colour,
    });

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