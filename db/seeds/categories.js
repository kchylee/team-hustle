
exports.seed = function(knex, Promise) {
    //Deletes ALL existing entries
    return knex('categories').del()
      .then(function () {
        // Inserts seed entries
        return Promise.all([
          knex('categories').insert({
            id: 1,
            name: '/technology and computing/internet technology'
          }),
          knex('categories').insert({
            id: 2,
            name: '/art and entertainment/books and literature/non-fiction'
          }),
          knex('categories').insert({
            id: 3,
            name: '/art and entertainment/books and literature/poetry'
          }),
          knex('categories').insert({
            id: 4,
            name: '/art and entertainment/books and literature/science fiction'
          })          
        ])
      });
  };
  