# Leaflet Earthquake Visualization Challenge

## Background

The United States Geological Survey (USGS) provides scientific data on natural hazards, ecosystem health, climate, and land-use changes. However, the USGS lacks an effective tool to visualize its vast earthquake data, which is updated frequently and covers global seismic activity. 

This project focuses on creating an interactive map using **Leaflet.js** to help USGS scientists, government organizations, and the public visualize earthquake data. The goal is to better inform users about seismic activity and to raise awareness of the importance of continued monitoring and funding for these efforts.

## Project Overview

This project consists of two main parts:
1. **Earthquake Data Visualization**: Visualize real-time earthquake data using markers that vary in size and color based on earthquake magnitude and depth.
2. **(Optional) Tectonic Plates and Earthquake Activity**: Add an additional dataset to plot tectonic plates and demonstrate their relationship with seismic activity.

## Files and Structure

This project is divided into two main parts:
- **Leaflet-Part-1**: The primary task of visualizing earthquake data.
- **Leaflet-Part-2**: An optional extension that adds tectonic plate boundaries to the map.

The structure of the project is as follows:
```
leaflet-challenge/
│
├── Leaflet-Part-1/
│   ├── index.html
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── js/
│   │   │   └── logic.js
│   └── README.md
│
├── Leaflet-Part-2/
│   ├── static/
│   │   ├── css/
│   │   │   └── style.css
│   │   ├── data/
│   │   │   └── PB2002_plates.json
│   │   ├── js/
│   │   │   └── logic.js
│   └── README.md
│
├── index.html
└── README.md
```

## Part 1: Earthquake Visualization

In this section, you will create a map that displays earthquake data from the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). The map will feature:
- Markers representing earthquakes based on their geographical coordinates (latitude and longitude).
- Marker sizes corresponding to earthquake magnitude and colors indicating earthquake depth.
- Popups with additional earthquake information (location, magnitude, depth) when clicked.
- A legend providing context for earthquake depth.

### Features:
1. Earthquake markers with size based on magnitude and color based on depth.
2. Popups that display relevant information.
3. Interactive legend for depth.
4. Customizable base maps.

## Part 2: (Optional) Tectonic Plate Boundaries

In this optional section, you can enhance your visualization by:
- Plotting tectonic plate boundaries using data from the [Tectonic Plates GitHub Repo](https://github.com/fraxen/tectonicplates).
- Adding multiple base maps for users to choose from (e.g., satellite view, street view).
- Creating layer controls to toggle between earthquake data and tectonic plate boundaries.

### Features:
1. Tectonic plate boundaries overlay on the map.
2. Multiple selectable base maps.
3. Toggle controls for datasets.

## Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/leaflet-challenge.git
cd leaflet-challenge
```

### 2. Download the Data
The earthquake data is fetched directly from the [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php). The map supports four data layers: `all_hour`, `all_day`, `all_week`, and `all_month`, with `all_month` set as the default layer. You can switch between these layers to view earthquake activity over different time periods.

For the tectonic plate overlay, the dataset was downloaded from the [Tectonic Plates GitHub Repo](https://github.com/fraxen/tectonicplates) and stored locally in the `data` directory for use in **Leaflet-Part-2**.

### 3. Run the Project
Open `index.html` in your browser to view the interactive map and explore earthquake data.

## Dependencies

- [Leaflet.js](https://leafletjs.com/) for creating interactive maps.
- [D3.js](https://d3js.org/) for data manipulation and loading GeoJSON.
- [USGS GeoJSON Feed](https://earthquake.usgs.gov/earthquakes/feed/v1.0/geojson.php) for earthquake data.

## Contributing

Contributions are welcome! If you have any suggestions or would like to report an issue, feel free to open a pull request or issue.

## License

This project is licensed under the MIT License.

---

Enjoy visualizing earthquakes and exploring tectonic activity with **Leaflet**!