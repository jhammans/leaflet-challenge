let myMap = L.map("map", {
    center: [39.8283, -98.5795],
    zoom: 5
  });
  
  // Adding the tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(myMap);
  


// Store our API endpoint as queryUrl.
let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_month.geojson"
// let url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson"

d3.json(url).then(function(response) {

    console.log(response);
    features = response.features;
  
    let heatArray = [];
  
    for (let i = 0; i < features.length; i++) {
      let location = features[i].geometry;
      if (location) {
        // console.log(location);
        heatArray.push([location.coordinates[1], location.coordinates[0]]);
      }
  
    }
 
    L.heatLayer(heatArray, {
      radius: 25,
      blur: 15
    }).addTo(myMap);
  
  });
  
  