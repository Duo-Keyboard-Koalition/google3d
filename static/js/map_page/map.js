let map;

async function init(
  lat = 0,
  lng = 0,
  alt = 0,
  heading = 0,
  tilt = 0,
  range = 0,
  my_location = false
) {
  const { Map3DElement, Marker3DElement } = await google.maps.importLibrary(
    "maps3d"
  );

  const mapContainer = document.getElementById("map-container");
  map = new Map3DElement({
    center: { lat: lat, lng: lng, altitude: alt },
    heading: heading,
    tilt: tilt,
    range: range,
  });

  const marker = new Marker3DElement({
    position: { lat: 48.861, lng: 2.335861 },
  });

  map.append(marker);

  mapContainer.appendChild(map);
  console.log("Google Maps API loaded");

  // Add event listeners using jQuery
  map.addEventListener("gmp-click", (event) => {
    console.log(event.position);
    // Do something with event.position.
    appendMarker(event.position.lat, event.position.lng, map);
  });

  if (my_location === 1 || my_location === true) {
    myLocation();
  }
}

function adjustMapHeight() {
  const mapContainer = $("#map-container");
  if (mapContainer.length) {
    mapContainer.css("height", `${$(window).height()}px`); // Set height using jQuery
  }
}

function handleMapClick(event) {
  console.log("Event triggered: gmp-click");
  // print the event object to the console
  console.log(event);
  console.log(event.position);
}
function handleCenterChange(event) {
  console.log("Event triggered: gmp-centerchange");
  // print the event object to the console
  console.log(event);
}

function handleHeadingChange(event) {
  console.log("Event triggered: gmp-headingchange");
  // print the event object to the console
  console.log(event);
}

function handleRangeChange(event) {
  console.log("Event triggered: gmp-rangechange");
  // print the event object to the console
  console.log(event);
}

function handleRollChange(event) {
  console.log("Event triggered: gmp-rollchange");
  // print the event object to the console
  console.log(event);
}

function handleSteadyChange(event) {
  let steadyStatus;

  steadyStatus = event.isSteady ? "steady" : "not steady";

  console.log(`Event triggered: gmp-steadychange - Map is ${steadyStatus}`);
}

function handleTiltChange(event) {
  console.log("Event triggered: gmp-tiltchange");
  // print the event object to the console
  console.log(event);
}

// Use jQuery to set up load and resize event listeners
$(window).on("load", function () {
  adjustMapHeight();
  //initMap();
  // only called if the mylocatoin flag is true
});

$(window).on("resize", adjustMapHeight);
async function appendMarker(lat = 0, lng = 0, map) {
  const { Map3DElement, Marker3DElement } = await google.maps.importLibrary(
    "maps3d"
  );

  const marker = new Marker3DElement({
    position: { lat: lat, lng: lng },
  });

  map.append(marker);
  // the marker would have an on cli
}

function updateMapLocation(location) {
  // the location woud be in the form of natural language
}
