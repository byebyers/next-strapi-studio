// module.exports = {
//   async beforeCreate(event) {
//     const { data, where, populate } = event.params;
//     const id = where.id
//     const location = await strapi.entityService.findOne("api::menu.menu", id,{
//       populate: 'deep',
//     });
//     //const local = location.editLocation
//     // local.map((item) => {
//     //   item.storeTitle = item.location.title
//     // })
//   },
//   async beforeUpdate(event) {
//     const { where } = event.params;

//     const id = where.id

//     const location = await strapi.entityService.findOne("api::menu.menu", id,{
//       populate: 'deep',
//     });
    
//     const local = location.editLocation
//     local.map((item) => {
     
//       item.storeTitle = item.location.title
//       return item
//     })
//     console.log(local)
//   },
// };