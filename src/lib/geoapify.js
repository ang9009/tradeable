const getLocationAutocomplete = async (search) => {
  const result = await fetch(
    `https://api.geoapify.com/v1/geocode/autocomplete?text=${search}&filter=countrycode:hk&apiKey=f72b8270028941c2ab39d99b36b111a1`
  )
    .then((data) => data.json())
    .then((res) => {
      const locationOptions = [];
      const locationsInfo = res.features;

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

  return result;
};

export { getLocationAutocomplete };
