// Initialize Firebase
var config = {
  apiKey: "AIzaSyCPDq9zGMsYIYATgUKuilErUgrDFOCSPXw",
  authDomain: "vigoradventure.firebaseapp.com",
  databaseURL: "https://vigoradventure.firebaseio.com",
  projectId: "vigoradventure",
  storageBucket: "vigoradventure.appspot.com",
  messagingSenderId: "894124047169"
};

firebase.initializeApp(config);

var map;
var infowindow;

function initMap() {
  var austin = {
    lat: 30.2849,
    lng: 97.7341
  };

  map = new google.maps.Map(document.getElementById('map'), {
    center: austin,
    zoom: 15
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: austin,
    radius: 500,
    type: ['restaurant']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({map: map, position: place.geometry.location});

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
