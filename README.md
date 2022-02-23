# project3
 For ENGO 551 Lab 3

* Added in new map layer to show traffic accidents *

Contains a Geo-web application showing building permits within the City of Calgary.
Uses Leaflet.js to form map and markers.
Uses Open Calgary API for City of Calgary building permit data (received as GeoJSON).
Users input a search using permit issue date range, search returns a map of permit markers

Search query returns a map displayed with markers. Clicking on markers displays permit information. 
Leaflet.js plug-ins:
	-  https://github.com/jawj/OverlappingMarkerSpiderfier-Leaflet
	-  https://github.com/Leaflet/Leaflet.markercluster

Directory Summmary:
	- requirements.txt: required imports/libraries
	- app.py: Main flask application used to run the webapp
	- static:
		- Contains stylesheets 
		- Containes JavaScript files 
	- templates:
		- map.html: produces default map on first load of app
			    shows search result markers
	