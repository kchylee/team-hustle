
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('books').insert({
          isbn: 9781476758763,
          title: 'The last Tudor',
          abstract: ''
        }),
        knex('branches').insert({
          isbn: '',
          title: '',
          abstract: ''
        }),
        knex('branches').insert({
          isbn: '',
          title: '',
          abstract: ''
        })
      ])
    });
};
