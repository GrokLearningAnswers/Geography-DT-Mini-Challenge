let map = loadMap('map', [0, 0], 1);

// The US markers with labels
let newYork = addMarker(map, [40.7, -74], {
    popup: 'New York reached 1 million people in 1812',
});
let losAngeles = addMarker(map, [34.1, -118.2], {
    popup: 'Los Angeles reached 1 million people in 1927',
});
let chicago = addMarker(map, [47.9, -87.6], {
    popup: 'Chicago reached 1 million people in 1890',
});
let houston = addMarker(map, [29.8, -95.4], {
    popup: 'Houston reached 1 million people in 1969',
});
let phoenix = addMarker(map, [33.4, -112.1], {
    popup: 'Phoenix reached 1 million people in 1969',
});
let philadelphia = addMarker(map, [40, -75.2], {
    popup: 'Philadelphia reached 1 million people in 1890',
});
let sanAntonio = addMarker(map, [29.4, -98.5], {
    popup: 'San Antonio reached 1 million people in 1997',
});
let sanDiego = addMarker(map, [32.7, -117.2], {
    popup: 'San Diego reached 1 million people in 1988',
});
let dallas = addMarker(map, [32.7, -96.8], {
    popup: 'Dallas reached 1 million people in 1990',
});
let sanJose = addMarker(map, [37.3, -121.9], {
    popup: 'San Jose reached 1 million people in 2018',
});

// Add labels for the Australian markers
let sydney = addMarker(map, [-33.9, 151.2], {
    popup: 'Sydney reached 1 million people in 1929',
});
let melbourne = addMarker(map, [-37.8, 145], {
    popup: 'Melbourne reached 1 million people in 1930',
});
let brisbane = addMarker(map, [-27.5, 153], {
    popup: 'Brisbane reached 1 million people in 1971',
});
let perth = addMarker(map, [-32, 115.9], {
    popup: 'Perth reached 1 million people in 1984',
});
let adelaide = addMarker(map, [-34.9, 138.6], {
    popup: 'Adelaide reached 1 million people in 1984',
});