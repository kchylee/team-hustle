
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('book_category').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('book_category').insert([{
          "book_id": 1,
          "category_id": 1
        }, {
          "book_id": 1,
          "category_id": 28
        },
        {
          "book_id": 1,
          "category_id": 19
        },
        {
          "book_id": 2,
          "category_id": 3
        },
        {
          "book_id": 3,
          "category_id": 20
        },
        {
          "book_id": 4,
          "category_id": 22
        },
        {
          "book_id": 5,
          "category_id": 0
        },
        {
          "book_id": 6,
          "category_id": 2
        },
        {
          "book_id": 7,
          "category_id": 21
        },
        {
          "book_id": 8,
          "category_id": 37
        },
        {
          "book_id": 9,
          "category_id": 40
        },
        {
          "book_id": 10,
          "category_id": 40
        },
        {
          "book_id": 11,
          "category_id": 27
        },
        {
          "book_id": 12,
          "category_id": 10
        },
        {
          "book_id": 13,
          "category_id": 6
        },
        {
          "book_id": 14,
          "category_id": 13
        },
        {
          "book_id": 15,
          "category_id": 2
        },
        {
          "book_id": 16,
          "category_id": 32
        },
        {
          "book_id": 17,
          "category_id": 31
        },
        {
          "book_id": 18,
          "category_id": 3
        },
        {
          "book_id": 19,
          "category_id": 13
        },
        {
          "book_id": 20,
          "category_id": 19
        },
        {
          "book_id": 21,
          "category_id": 1
        },
        {
          "book_id": 22,
          "category_id": 9
        },
        {
          "book_id": 23,
          "category_id": 11
        },
        {
          "book_id": 24,
          "category_id": 26
        },
        {
          "book_id": 25,
          "category_id": 21
        },
        {
          "book_id": 26,
          "category_id": 13
        },
        {
          "book_id": 27,
          "category_id": 1
        },
        {
          "book_id": 28,
          "category_id": 38
        },
        {
          "book_id": 29,
          "category_id": 31
        },
        {
          "book_id": 30,
          "category_id": 1
        },
        {
          "book_id": 31,
          "category_id": 22
        },
        {
          "book_id": 32,
          "category_id": 24
        },
        {
          "book_id": 33,
          "category_id": 27
        },
        {
          "book_id": 34,
          "category_id": 22
        },
        {
          "book_id": 35,
          "category_id": 33
        },
        {
          "book_id": 36,
          "category_id": 15
        },
        {
          "book_id": 37,
          "category_id": 28
        },
        {
          "book_id": 38,
          "category_id": 33
        },
        {
          "book_id": 39,
          "category_id": 0
        },
        {
          "book_id": 40,
          "category_id": 35
        },
        {
          "book_id": 41,
          "category_id": 35
        },
        {
          "book_id": 42,
          "category_id": 30
        },
        {
          "book_id": 43,
          "category_id": 19
        },
        {
          "book_id": 44,
          "category_id": 2
        },
        {
          "book_id": 45,
          "category_id": 30
        },
        {
          "book_id": 46,
          "category_id": 26
        },
        {
          "book_id": 47,
          "category_id": 15
        },
        {
          "book_id": 48,
          "category_id": 32
        },
        {
          "book_id": 49,
          "category_id": 38
        },
        {
          "book_id": 50,
          "category_id": 19
        },
        {
          "book_id": 51,
          "category_id": 12
        },
        {
          "book_id": 52,
          "category_id": 19
        },
        {
          "book_id": 53,
          "category_id": 0
        },
        {
          "book_id": 54,
          "category_id": 12
        },
        {
          "book_id": 55,
          "category_id": 26
        },
        {
          "book_id": 56,
          "category_id": 3
        },
        {
          "book_id": 57,
          "category_id": 37
        },
        {
          "book_id": 58,
          "category_id": 9
        },
        {
          "book_id": 59,
          "category_id": 23
        },
        {
          "book_id": 60,
          "category_id": 19
        },
        {
          "book_id": 61,
          "category_id": 37
        },
        {
          "book_id": 62,
          "category_id": 1
        },
        {
          "book_id": 63,
          "category_id": 36
        },
        {
          "book_id": 64,
          "category_id": 39
        },
        {
          "book_id": 65,
          "category_id": 37
        },
        {
          "book_id": 66,
          "category_id": 37
        },
        {
          "book_id": 67,
          "category_id": 40
        },
        {
          "book_id": 68,
          "category_id": 16
        },
        {
          "book_id": 69,
          "category_id": 29
        },
        {
          "book_id": 70,
          "category_id": 37
        },
        {
          "book_id": 71,
          "category_id": 26
        },
        {
          "book_id": 72,
          "category_id": 14
        },
        {
          "book_id": 73,
          "category_id": 8
        },
        {
          "book_id": 74,
          "category_id": 25
        },
        {
          "book_id": 75,
          "category_id": 31
        },
        {
          "book_id": 76,
          "category_id": 35
        },
        {
          "book_id": 77,
          "category_id": 36
        },
        {
          "book_id": 78,
          "category_id": 5
        },
        {
          "book_id": 79,
          "category_id": 34
        },
        {
          "book_id": 80,
          "category_id": 25
        },
        {
          "book_id": 81,
          "category_id": 0
        },
        {
          "book_id": 82,
          "category_id": 5
        },
        {
          "book_id": 83,
          "category_id": 10
        },
        {
          "book_id": 84,
          "category_id": 18
        },
        {
          "book_id": 85,
          "category_id": 3
        },
        {
          "book_id": 86,
          "category_id": 14
        },
        {
          "book_id": 87,
          "category_id": 14
        },
        {
          "book_id": 88,
          "category_id": 39
        },
        {
          "book_id": 89,
          "category_id": 38
        },
        {
          "book_id": 90,
          "category_id": 40
        },
        {
          "book_id": 91,
          "category_id": 19
        },
        {
          "book_id": 92,
          "category_id": 8
        },
        {
          "book_id": 93,
          "category_id": 20
        },
        {
          "book_id": 94,
          "category_id": 26
        },
        {
          "book_id": 95,
          "category_id": 9
        },
        {
          "book_id": 96,
          "category_id": 9
        },
        {
          "book_id": 97,
          "category_id": 36
        },
        {
          "book_id": 98,
          "category_id": 19
        },
        {
          "book_id": 99,
          "category_id": 39
        }])
      ])
    });
};
