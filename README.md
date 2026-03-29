# Diaspora-Cultural-Map
An interactive 3D globe mapping the cultural and historical connections between the African continent and the Diaspora across five pillars: Dance, Food, Games, Religion, and Events. I haven’t optimized the website for mobile devices yet.

[View Live Project](https://aareonjackson.github.io/Diaspora-Cultural-Map/)

# Features

* Interactive 3D Globe: High-fidelity sphere with country and US state outlines.

* Dynamic Connections: Visualized "Ancestral Threads" connecting points of origin to Diaspora hubs.

* Cinematic Navigation: Automated camera transitions that zoom into specific connection midpoints.

* Storyboard System: Sequential historical data panels for each cultural pillar.

* Cultural Pillars: Data-driven exploration of Dance, Food, Games, Religion, and Events.

# Tech Stack

* Three.js: 3D rendering and spherical coordinate mapping.

* GSAP (GreenSock): Camera animations and UI transitions.

* Tailwind CSS: Responsive interface and glassmorphism effects.

* GeoJSON: Geographic boundary rendering for countries and states.

# Local Developement Setup

If you want to run the project locally or contribute to the code, follow these steps. Because the globe fetches geographic data (GeoJSON) for the globe outlines, it must be run through a local web server to avoid CORS issues.

1. Clone or download the repository.

1. Ensure index.html and data.js are in the same directory.

1. Open the folder in VS Code.

1. Launch using the Live Server extension or any local HTTP server.

# Data Structure

* All historical connections are managed within data.js using a FeatureCollection format. To add or edit connections, modify the properties within the features array:

* pillar: The category of the connection.

* origin/destination: Geographic coordinates and region names.

* storyboard: An array of era based historical content.

* color: The hex code used for the thread and UI highlights.

# License

This project is for educational and historical preservation purposes.
