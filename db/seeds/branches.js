
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('branches').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('branches').insert({
          name: 'Toronto Reference Library',
          location: 'Annex/ Rosedale-Moore Park'
        }),
        knex('branches').insert({
          name: 'North York Central',
          location: 'Lansing-Westgate/ Willowdale East'
        }),
        knex('branches').insert({
          name: 'Leaside',
          location: 'Leaside-Bennington'
        })
      ])
    });
};
