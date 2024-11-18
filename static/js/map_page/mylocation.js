    $(document).ready(function () {
        $('#myLocationButton').on('click', function () {
            if (typeof myLocation === 'function') {
                myLocation();
            } else {
                console.error('myLocation function is not defined');
            }
        });

        $('#locationForm').on('submit', function (e) {
            e.preventDefault();
            var location = $('#locationInput').val().trim();
            if (location) {
                console.log('Location:', location);
                if (typeof updateMapLocation === 'function') {
                    updateMapLocation(location);
                } else {
                    console.error('updateMapLocation function is not defined');
                }
            }
        });
    });

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