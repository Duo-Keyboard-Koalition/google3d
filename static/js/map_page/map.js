let map;

function initMap() {
  console.log("Google Maps API loaded");
  map = $("gmp-map-3d").get(0); // Use jQuery to select the gmp-map-3d element

  if (map) {
    // Add event listeners using jQuery
    $(map).on("gmp-click", handleMapClick);
    $(map).on("gmp-centerchange", handleCenterChange);
    $(map).on("gmp-headingchange", handleHeadingChange);
    $(map).on("gmp-rangechange", handleRangeChange);
    $(map).on("gmp-rollchange", handleRollChange);
    $(map).on("gmp-steadychange", handleSteadyChange);
    $(map).on("gmp-tiltchange", handleTiltChange);
  } else {
    console.error("Map element not found");
  }
}

function adjustMapHeight() {
  const mapContainer = $("#map-container");
  if (mapContainer.length) {
    mapContainer.css("height", `${$(window).height()}px`); // Set height using jQuery
  }
}

function handleMapClick(event) {

  const lat = event.detail.latLng.lat;
  const lng = event.detail.latLng.lng;
  console.log(`Clicked at: ${lat.toFixed(6)}, ${lng.toFixed(6)}`);

  // Remove existing marker if any
  if (marker) {
    marker.remove();
  }

  // Create and add new marker
  marker = new google.maps.marker.AdvancedMarkerElement({
    position: { lat: lat, lng: lng },
    map: map,
    title: 'Clicked Location'
  });
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
    async function init() {
      const { Map3DElement, Marker3DElement } = await google.maps.importLibrary("maps3d");

      const marker = new Marker3DElement({
        position: { lat: 48.861000, lng: 2.335861 }
      });

      map = $("gmp-map-3d").get(0); // Use jQuery to select the gmp-map-3d element

      $(map).append(marker);
    }


function updateMapLocation(location){
    // the location woud be in the form of natural language

}

function myLocation() {
    console.log("Google Maps API loaded");
      map = $("gmp-map-3d").get(0); // Use jQuery to select the gmp-map-3d element
    
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const userLat = position.coords.latitude;
            const userLng = position.coords.longitude;
    
            // Set the map center to the user's location
            const userCenter = `${userLat},${userLng}`;
            $(map).attr("center", userCenter); // Update center attribute
            // set the tilt of the container to 0
            $(map).attr("tilt", 0);
            // set the heading of the container to 0
            $(map).attr("heading", 0);
            // set the range of the container to 1000
            $(map).attr("range", 1000);
            console.log(`User's Location: ${userLat}, ${userLng}`);
          },
          () => {
            console.error("Unable to retrieve your location.");
            // Handle error case here, e.g., set a default location
          }
        );
      } else {
        console.error("Geolocation is not supported by this browser.");
        // Handle browsers that do not support geolocation
      }
    }