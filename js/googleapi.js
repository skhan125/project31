/ Initialize and add the map
function initMap() {
    // The map, centered at IIT
    const iit={lat: 41.836895, lng: -87.627276};
    const map=new google.maps.Map(document.getElementById("map"), {
        zoom: 15,
        center: iit,
    });

    //markers

    const markers = [
     [
       "home",
       42.012915866034945,
       -87.68261543069347
     ],
     [
       "school",
       41.835012030589525,
       -87.62708876535238
     ],
     [
       "favorite restraunt",
       42.00677597210306,
       -87.66064518232024
     ]
  ];

  for (let i = 0; i<markers.length; i++) {
        const currMarker = markers[i];

        const marker = new google.maps.Marker({
            position: {lat: currMarker[1], lng: currMarker[2]},
            map,
            title: currMarker[0],
            });

            const infowindow = new google.maps.InfoWindow({
                content: currMarker[0],
            });

            marker.addListener("click", () => {
                infowindow.open(map, marker);
            });
        }

    //slider
    document.querySelector('.slider-img');
// Marker Content
    const iconBase =
        "https://developers.google.com/maps/documentation/javascript/examples/full/images/";
    const icons={
        redCirclePaddle: {
            icon: "https://maps.google.com/mapfiles/kml/paddle/red-circle.png",
        },
        library: {
            icon: iconBase + "library_maps.png",
        },
    };
    const features=[
        {
            position: new google.maps.LatLng(41.836895, -87.627276), // IIT
            type: "redCirclePaddle",
            pinTitle: "<h1>Illinois Institute of Technology</h1>",
            pinDescription:"",
        },
        {
            position: new google.maps.LatLng(41.833734, -87.62831), // Library
            type: "library",
            pinTitle: "<h1>Paul V. Galvin Library</h1>",
            pinDescription:"",
        },
    ];

    // Array of Info Windows
    let availWindows=[];
    for (let i=0; i < features.length; i++) {
        availWindows[i]=new google.maps.InfoWindow({
            content: features[i].pinTitle
        });
    }

    // Create Markers & Info Windows
    for (let i=0; i < features.length; i++) {
        const marker=new google.maps.Marker({
            position: features[i].position,
            icon: icons[features[i].type].icon,
            map: map,
            title: "features[i].pinTitle",
        });

        marker.addListener("click", () => {
            availWindows[i].open({
                anchor: marker,
                map,
            });
        })
    }
}
window.addEventListener('load', initMap)
