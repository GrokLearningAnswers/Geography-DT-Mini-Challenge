let map = loadMap('map', [40, -100], 3);

function addCity(city) {
    let colour;
    if (city.founded >= 1850) {
        colour = 'green';
    } else if (city.founded >= 1800) {
        colour = 'yellow';
    } else if (city.founded >= 1700) {
        colour = 'orange'
    } else if (city.founded >= 1600) {
        colour = 'red';
    } else {
        colour = 'purple';
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

fetch('us-capital-cities-by-year.json')
    .then(function(response) {
        return response.json();
    })
    .then(addCities);