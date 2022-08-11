let map = loadMap('map', [-25, 120], 4);

function addCity(city) {
    let marker = addMarker(map, [city.latitude, city.longitude], {
        popup: city.name,
    })
    return marker;
}

let perth = {name: "Perth", latitude: -31.95224, longitude: 115.861397};
let mandurah = {name: "Mandurah", latitude: -32.526901, longitude: 115.721703};
let geraldton = {name: "Geraldton",latitude: -28.778971, longitude: 114.614594};
let bunbury = {name: "Bunbury",latitude: -33.32711, longitude: 115.641373};
let albany = {name: "Albany", latitude: -35.003101, longitude: 117.865952};
let kwinana = {name: "Kwinana", latitude: -32.230129, longitude: 115.781281};
let roebourne = {name: "Roebourne", latitude: -20.772289, longitude: 117.146477};
let port = {name: "Port Hedland", latitude: -20.312149, longitude: 118.610588};
let broome = {name: "Broome", latitude: -17.955379, longitude: 122.23922};
let busselton = {name: "Busselton", latitude: -33.652489, longitude: 115.345497};

addCity(perth);
addCity(mandurah);
addCity(geraldton);
addCity(bunbury);
addCity(albany);
addCity(kwinana);
addCity(roebourne);
addCity(port);
addCity(broome);
addCity(busselton);