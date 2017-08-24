
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('branches').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('branches').insert({
          id: 1,
          name: 'Toronto Reference Library',
          location: 'Annex/ Rosedale-Moore Park'
        }),
        knex('branches').insert({
          id: 2,
          name: 'North York Central',
          location: 'Lansing-Westgate/ Willowdale East'
        }),
        knex('branches').insert({
          id: 3,
          name: 'Leaside',
          location: 'Leaside-Bennington'
        }),
        knex('branch_book').insert({
          branch_id: 1,
          book_id: 1,
          frequency: 80
        }),
        knex('branch_book').insert({
          branch_id: 2,
          book_id: 1,
          frequency: 117
        }),
        knex('branch_book').insert({
          branch_id: 3,
          book_id: 1,
          frequency: 34
        }),
        knex('branch_book').insert({
          branch_id: 1,
          book_id: 2,
          frequency: 40
        }),
        knex('branch_book').insert({
          branch_id: 3,
          book_id: 3,
          frequency: 150
        })
      ])
    });
};
