// Initialize the map
let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5
});

// Adding the tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// Function to get color based on depth
function getDepthColor(depth) {
    return depth > 90 ? '#800026' :
           depth > 70 ? '#BD0026' :
           depth > 50 ? '#E31A1C' :
           depth > 30 ? '#FC4E2A' :
           depth > 10 ? '#FD8D3C' :
                        '#FFEDA0';
}

// Function to create markers for each dataset
function createMarkers(url) {
    let layerGroup = L.layerGroup(); // Create a layer group for the dataset

    d3.json(url).then(function (response) {
        let features = response.features;

        // Loop through the earthquake features and add circle markers
        for (let i = 0; i < features.length; i++) {
            let location = features[i].geometry;
            let properties = features[i].properties;

            if (location) {
                let lat = location.coordinates[1];
                let lng = location.coordinates[0];
                let depth = location.coordinates[2];
                let magnitude = properties.mag;
                let place = properties.place;

                // Add circle marker with size based on magnitude and color based on depth
                let marker = L.circleMarker([lat, lng], {
                    radius: magnitude * 4,  // Magnitude-based size
                    fillColor: getDepthColor(depth),  // Depth-based color
                    color: "#000",  // Border color
                    weight: 1,
                    opacity: 1,
                    fillOpacity: 0.8
                }).bindPopup(`<h3>Location: ${place}</h3><hr><p>Depth: ${depth} km</p>
                                                             <p>Magnitude: ${magnitude}</p>`);

                marker.addTo(layerGroup); // Add marker to the layer group
            }
        }
    });

    return layerGroup; // Return the created layer group
}

// Create a legend to display information about map.
let info = L.control({
    position: "bottomright"
});

// When the layer control is added, insert a div with the class of "legend".
info.onAdd = function () {
    let div = L.DomUtil.create("div", "legend");

    // Depth intervals (without hardcoded colors)
    let depthRanges = [0, 10, 30, 50, 70, 90];

    // Add title to the legend
    div.innerHTML = '<h4>Earthquake Depth (km)</h4>';

    // Loop through the depth ranges and generate a colored square for each range
    for (let i = 0; i < depthRanges.length; i++) {
        div.innerHTML +=
            '<i style="background:' + getDepthColor(depthRanges[i]) + '"></i> ' +
            depthRanges[i] + (depthRanges[i + 1] ? '&ndash;' + depthRanges[i + 1] + ' km<br>' : '+ km');
    }

    return div;
};

// Add the info legend to the map.
info.addTo(myMap);

// Define URLs for the different time frames
let urlHour = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_hour.geojson";
let urlDay = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson";
let urlWeek = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
let urlMonth = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_month.geojson";

// Create the layer groups for each dataset
let hourLayer = createMarkers(urlHour);
let dayLayer = createMarkers(urlDay);
let weekLayer = createMarkers(urlWeek);
let monthLayer = createMarkers(urlMonth);

// Define base layers
let baseMaps = {
  "Hourly Data": hourLayer,
  "Daily Data": dayLayer,
  "Weekly Data": weekLayer,
  "Monthly Data": monthLayer
};

// Add the control layer to the map
L.control.layers(baseMaps).addTo(myMap);

// Load the default layer (month data)
monthLayer.addTo(myMap);