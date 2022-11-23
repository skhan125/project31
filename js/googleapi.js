function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 42.058890, lng: -87.749071 },
    zoom: 12,
  });

  new google.maps.Marker({
    position: { lat: 41.8349, lng: -87.62708876535238 },
    map,
    title: "IIT!",
  });
  
  new google.maps.Marker({
    position: { lat: 41.9142, lng: -88.3087 },
    map,
    title: "Home!",
  });
}

window.initMap = initMap;
