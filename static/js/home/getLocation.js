function myLocation() {
  console.log("Getting user location");

  return new Promise((resolve, reject) => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const mapSettings = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            alt: 1000,
            tilt: 0,
            heading: 0,
            range: 100
          };

          console.log(`User's Location: ${mapSettings.lat}, ${mapSettings.lng}`);
          resolve(mapSettings);
        },
        (error) => {
          console.error("Unable to retrieve your location:", error);
          reject(error);
        }
      );
    } else {
      const error = new Error("Geolocation is not supported by this browser.");
      console.error(error.message);
      reject(error);
    }
  });
}
