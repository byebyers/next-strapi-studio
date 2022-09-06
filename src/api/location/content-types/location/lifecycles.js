const NodeGeocoder = require('node-geocoder');
const slugify = require('slugify')

const options = {
  provider: 'openstreetmap'
};

const geocoder = NodeGeocoder(options);


// module.exports = {
//   beforeCreate(event) {
//     event.params.data.details = geocoder.geocode(event.params.data.address)
//       .then(response => {
//         event.params.data.details = response.results[0]
//         console.log(event.params.data.details)
//       })
//       .catch(err => {
//         console.error(err);
//       }
//     );
//   },
// };



module.exports = {
  async beforeCreate(event) {
    const { data } = event.params;
    const res = await geocoder.geocode(`${data.address}`)
    const slug = slugify(data.title.toLowerCase())
    data.latitude = res[0].latitude;
    data.longitude = res[0].longitude;
    data.slug = slug
  },
  async beforeUpdate(event) {
    const { data } = event.params;
    const res = await geocoder.geocode(`${data.address}`)
    const slug = slugify(data.title.toLowerCase())
    data.latitude = res[0].latitude;
    data.longitude = res[0].longitude;
    data.slug = slug
  },
};