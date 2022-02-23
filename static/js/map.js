// Date range picker
$(function() {

  $('input[name="datefilter"]').daterangepicker({
      autoUpdateInput: false,
      locale: {
          cancelLabel: 'Clear'
      }
  });
  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
      $(this).val(picker.startDate.format('MM/DD/YYYY') + ' - ' + picker.endDate.format('MM/DD/YYYY'));
  });
  $('input[name="datefilter"]').on('cancel.daterangepicker', function(ev, picker) {
      $(this).val('');
  });
});




// Add baselayers
var base = L.tileLayer('https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=cEgaV9M2KZkGEYF5k2vO',{
       tileSize: 512,
       zoomOffset: -1,
       minZoom: 1,
       attribution: "\u003ca href=\"https://www.maptiler.com/copyright/\" target=\"_blank\"\u003e\u0026copy; MapTiler\u003c/a\u003e \u003ca href=\"https://www.openstreetmap.org/copyright\" target=\"_blank\"\u003e\u0026copy; OpenStreetMap contributors\u003c/a\u003e",
       crossOrigin: true
     }),
     traffic = L.tileLayer('https://api.mapbox.com/styles/v1/eprosser88/ckzywvw6t003q14qm45l202ct/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZXByb3NzZXI4OCIsImEiOiJja3p5d3FoNm4wNGo1M2tuZmNnaHphc2cxIn0.gguHDZWaDus2L4AW0h97rA',{
            id: 'mapbox/strees-v11',
            tileSize: 512,
            zoomOffset: -1,
            minZoom: 1,
            attribution:  `© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>`
          });

var this_map = L.map('map', {
    center: [51.0047, -114.0719],
    zoom: 11,
    layers: [traffic, base]
});

var baseMaps = {
    "Calgary": base
};

var overlayMaps = {
  "Traffic Accidents": traffic
};

L.control.layers(baseMaps, overlayMaps).addTo(this_map);
