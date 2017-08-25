
exports.seed = function(knex, Promise) {
  //Deletes ALL existing entries
  return knex('book_category').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('book_category').insert({
          book_id: 1,
          category_id: 1
        }),
        knex('book_category').insert({
          book_id: 1,
          category_id: 2
        }),
        knex('book_category').insert({
          book_id: 1,
          category_id: 3
        }),
        knex('book_category').insert({
          book_id: 1,
          category_id: 1
        }),
        knex('book_category').insert({
          book_id: 1,
          category_id: 3
        }),
        knex('book_category').insert({
          book_id: 1,
          category_id: 4
        }),
        knex('book_category').insert({
          book_id: 1,
          category_id: 3
        })          
      ])
    });
};
