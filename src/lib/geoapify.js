const getLocationAutocomplete = async (search) =>
  await fetch(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&filter=rect:113.8087570696332,22.151069875284193,114.42202040809912,22.597333743462997&apiKey=f72b8270028941c2ab39d99b36b111a1`
  )
    .then((res) => {
      if (!res.ok) {
        throw new Error("Error: please contact a site");
      }

      return res.json();
    })
    .then((data) => {
      const locationOptions = [];
      const locationsInfo = data.features;

      locationsInfo.forEach((locationObj) => {
        const location = locationObj.properties.address_line1;
        const address = locationObj.properties.address_line2;
        const coords = {
          lat: locationObj.geometry.coordinates[1],
          lng: locationObj.geometry.coordinates[0],
        };

        locationOptions.push({
          label: location,
          value: { location, coords },
          address: address,
        });
      });

      return locationOptions;
    });

export { getLocationAutocomplete };
