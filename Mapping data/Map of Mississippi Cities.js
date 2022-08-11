let map = loadMap('map', [40, -100], 4);

function addCity(city) {
    let marker = addMarker(map, [city.latitude, city.longitude], {
        popup: city.name,
    })
    return marker;
}

let cities = [{
    "name": "Memphis, TN",
    "latitude": 35.149532,
    "longitude":-90.048981,
    "population": 646889
},
    {
        "name": "Minneapolis, MN",
        "latitude": 44.977753,
        "longitude": -93.265015,
        "population": 382578
    },
    {
        "name": "New Orleans, LA",
        "latitude": 29.951065,
        "longitude": -90.071533,
        "population": 343829
    },
    {
        "name": "St. Louis, MO",
        "latitude": 38.627003,
        "longitude": -90.199402,
        "population": 319294
    },
    {
        "name": "Saint Paul, MN",
        "latitude": 44.954445,
        "longitude": -93.091301,
        "population": 285068
    },
    {
        "name": "Baton Rouge, LA",
        "latitude": 30.471165,
        "longitude": -91.147385,
        "population": 229493
    },
    {
        "name": "Davenport, IA",
        "latitude": 41.543056,
        "longitude": -90.590836,
        "population": 99685
    }];

cities.forEach(addCity);
