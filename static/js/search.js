
// Function to create markers for inputted geojson features
function identify(geojson){

    if (geojson.features.length==0){
        alert("Building permits not exist! Please choose another date range.");
        return;
    }

    // Marker Spiderfy setup
    var oms = new OverlappingMarkerSpiderfier(this_map);
    var popup = new L.Popup();
    oms.addListener('click', function(marker) {
    popup.setContent(marker.desc);
    popup.setLatLng(marker.getLatLng());
    this_map.openPopup(popup);
    });
    oms.addListener('spiderfy', function(markers) {
        this_map.closePopup();
    });

    // Create cluster group
    var markers = L.markerClusterGroup();

    // Loop thorugh all geojson features
    for (var i = 0; i < geojson.features.length; i++){
        // Get marker location
        var datum = geojson.features[i];
        var lat_lon = new L.LatLng(datum.geometry.coordinates[1], datum.geometry.coordinates[0]);

        // Create new marker at location
        var marker = new L.Marker(lat_lon);
        // Get marker popup information
        var popupcontent = "Issued Date: "+datum.properties.issueddate+"<br>"+
                        "Workclass Group: "+datum.properties.workclassgroup+"<br>"+
                        "Contractor Name: "+datum.properties.contractorname+"<br>"+
                        "Community Name: "+datum.properties.communityname+"<br>"+
                        "Original Address: "+datum.properties.originaladdress;
        // Add markers to map addLayer
        this_map.addLayer(markers);
        oms.addMarker(marker);
        markers.addLayer(marker);
        // Bind popup content
        marker.bindPopup(popupcontent);
        // Change to show popup on mouse hover
        marker.on('mouseover', function (e) {this.openPopup(); });
        marker.on('mouseout', function (e) {this.closePopup(); });
    }

}
