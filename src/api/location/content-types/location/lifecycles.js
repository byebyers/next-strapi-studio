const Geocodio = require('geocodio-library-node');
const geocoder = new Geocodio(process.env.GEOCODE_API);


module.exports = {
  afterUpdate(event) {
    const { data, where, select, populate } = event.params;
    
    if (event.result.info.address) {
      event.result.info.details = geocoder.geocode(event.result.info.address)
        .then(response => {
          event.result.info.details = response.results[0]
          console.log(event.result.info)
        })
        .catch(err => {
          console.error(err);
        }
      );
    }

    
    
  },
};