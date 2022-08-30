const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio(process.env.GEOCODE_API);




module.exports = {
  beforeCreate(event) {
    event.params.data.details = geocoder.geocode(event.params.data.address)
      .then(response => {
        event.params.data.details = response.results[0]
        console.log(event.params.data.details)
      })
      .catch(err => {
        console.error(err);
      }
    );
  },
};