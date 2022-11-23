function initMap() {
  const googlemap = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 41.879064, lng: -87.635936 },
    zoom: 15,
    scaleControl: true,
  });
  
  const markers = new google.maps.Markers({
    position: { lat: 41.835012030589525, lng: -87.62708876535238},
    map: map,
  });
  
  const infowindow = new google.maps.InfoWindow({
    content: currMarkers[0],
  });
  infowindow.open(map, markers);
}
window.initMap = initMap;
