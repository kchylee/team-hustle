
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
        knex('branch_book').insert([{
          branch_id: 1,
          book_id: 1,
          frequency: 80
        },{
          "branch_id": 3,
          "book_id": 60,
          "frequency": 67
        },
        {
          "branch_id": 3,
          "book_id": 88,
          "frequency": 113
        },
        {
          "branch_id": 3,
          "book_id": 89,
          "frequency": 7
        },
        {
          "branch_id": 1,
          "book_id": 41,
          "frequency": 61
        },
        {
          "branch_id": 1,
          "book_id": 29,
          "frequency": 92
        },
        {
          "branch_id": 1,
          "book_id": 88,
          "frequency": 113
        },
        {
          "branch_id": 3,
          "book_id": 61,
          "frequency": 74
        },
        {
          "branch_id": 1,
          "book_id": 89,
          "frequency": 10
        },
        {
          "branch_id": 1,
          "book_id": 31,
          "frequency": 93
        },
        {
          "branch_id": 3,
          "book_id": 35,
          "frequency": 130
        },
        {
          "branch_id": 1,
          "book_id": 56,
          "frequency": 21
        },
        {
          "branch_id": 1,
          "book_id": 73,
          "frequency": 145
        },
        {
          "branch_id": 1,
          "book_id": 97,
          "frequency": 19
        },
        {
          "branch_id": 1,
          "book_id": 99,
          "frequency": 71
        },
        {
          "branch_id": 2,
          "book_id": 4,
          "frequency": 77
        },
        {
          "branch_id": 2,
          "book_id": 46,
          "frequency": 37
        },
        {
          "branch_id": 1,
          "book_id": 81,
          "frequency": 78
        },
        {
          "branch_id": 2,
          "book_id": 21,
          "frequency": 40
        },
        {
          "branch_id": 3,
          "book_id": 87,
          "frequency": 28
        },
        {
          "branch_id": 3,
          "book_id": 20,
          "frequency": 27
        },
        {
          "branch_id": 1,
          "book_id": 56,
          "frequency": 43
        },
        {
          "branch_id": 1,
          "book_id": 39,
          "frequency": 36
        },
        {
          "branch_id": 1,
          "book_id": 4,
          "frequency": 124
        },
        {
          "branch_id": 3,
          "book_id": 45,
          "frequency": 65
        },
        {
          "branch_id": 1,
          "book_id": 90,
          "frequency": 114
        },
        {
          "branch_id": 2,
          "book_id": 89,
          "frequency": 13
        },
        {
          "branch_id": 2,
          "book_id": 21,
          "frequency": 25
        },
        {
          "branch_id": 1,
          "book_id": 60,
          "frequency": 21
        },
        {
          "branch_id": 2,
          "book_id": 69,
          "frequency": 101
        },
        {
          "branch_id": 1,
          "book_id": 94,
          "frequency": 22
        },
        {
          "branch_id": 1,
          "book_id": 64,
          "frequency": 124
        },
        {
          "branch_id": 1,
          "book_id": 49,
          "frequency": 97
        },
        {
          "branch_id": 3,
          "book_id": 14,
          "frequency": 13
        },
        {
          "branch_id": 1,
          "book_id": 40,
          "frequency": 137
        },
        {
          "branch_id": 2,
          "book_id": 98,
          "frequency": 98
        },
        {
          "branch_id": 2,
          "book_id": 71,
          "frequency": 35
        },
        {
          "branch_id": 2,
          "book_id": 74,
          "frequency": 62
        },
        {
          "branch_id": 2,
          "book_id": 54,
          "frequency": 116
        },
        {
          "branch_id": 1,
          "book_id": 65,
          "frequency": 101
        },
        {
          "branch_id": 2,
          "book_id": 54,
          "frequency": 24
        },
        {
          "branch_id": 3,
          "book_id": 51,
          "frequency": 73
        },
        {
          "branch_id": 2,
          "book_id": 58,
          "frequency": 23
        },
        {
          "branch_id": 3,
          "book_id": 10,
          "frequency": 135
        },
        {
          "branch_id": 2,
          "book_id": 74,
          "frequency": 146
        },
        {
          "branch_id": 1,
          "book_id": 75,
          "frequency": 135
        },
        {
          "branch_id": 2,
          "book_id": 86,
          "frequency": 136
        },
        {
          "branch_id": 3,
          "book_id": 31,
          "frequency": 148
        },
        {
          "branch_id": 3,
          "book_id": 9,
          "frequency": 118
        },
        {
          "branch_id": 3,
          "book_id": 1,
          "frequency": 72
        },
        {
          "branch_id": 1,
          "book_id": 1,
          "frequency": 16
        },
        {
          "branch_id": 2,
          "book_id": 49,
          "frequency": 110
        },
        {
          "branch_id": 1,
          "book_id": 28,
          "frequency": 130
        },
        {
          "branch_id": 1,
          "book_id": 24,
          "frequency": 0
        },
        {
          "branch_id": 1,
          "book_id": 20,
          "frequency": 13
        },
        {
          "branch_id": 1,
          "book_id": 83,
          "frequency": 150
        },
        {
          "branch_id": 2,
          "book_id": 67,
          "frequency": 98
        },
        {
          "branch_id": 2,
          "book_id": 10,
          "frequency": 52
        },
        {
          "branch_id": 2,
          "book_id": 4,
          "frequency": 116
        },
        {
          "branch_id": 1,
          "book_id": 56,
          "frequency": 0
        },
        {
          "branch_id": 1,
          "book_id": 7,
          "frequency": 109
        },
        {
          "branch_id": 1,
          "book_id": 21,
          "frequency": 35
        },
        {
          "branch_id": 1,
          "book_id": 12,
          "frequency": 131
        },
        {
          "branch_id": 1,
          "book_id": 12,
          "frequency": 83
        },
        {
          "branch_id": 3,
          "book_id": 74,
          "frequency": 97
        },
        {
          "branch_id": 1,
          "book_id": 56,
          "frequency": 73
        },
        {
          "branch_id": 1,
          "book_id": 69,
          "frequency": 89
        },
        {
          "branch_id": 2,
          "book_id": 49,
          "frequency": 89
        },
        {
          "branch_id": 2,
          "book_id": 4,
          "frequency": 44
        },
        {
          "branch_id": 3,
          "book_id": 63,
          "frequency": 9
        },
        {
          "branch_id": 1,
          "book_id": 12,
          "frequency": 112
        },
        {
          "branch_id": 2,
          "book_id": 81,
          "frequency": 81
        },
        {
          "branch_id": 3,
          "book_id": 54,
          "frequency": 98
        },
        {
          "branch_id": 2,
          "book_id": 6,
          "frequency": 57
        },
        {
          "branch_id": 1,
          "book_id": 48,
          "frequency": 1
        },
        {
          "branch_id": 2,
          "book_id": 59,
          "frequency": 76
        },
        {
          "branch_id": 1,
          "book_id": 68,
          "frequency": 129
        },
        {
          "branch_id": 2,
          "book_id": 75,
          "frequency": 101
        },
        {
          "branch_id": 1,
          "book_id": 6,
          "frequency": 119
        },
        {
          "branch_id": 1,
          "book_id": 83,
          "frequency": 24
        },
        {
          "branch_id": 3,
          "book_id": 13,
          "frequency": 98
        },
        {
          "branch_id": 3,
          "book_id": 7,
          "frequency": 26
        },
        {
          "branch_id": 2,
          "book_id": 28,
          "frequency": 127
        },
        {
          "branch_id": 2,
          "book_id": 23,
          "frequency": 23
        },
        {
          "branch_id": 2,
          "book_id": 56,
          "frequency": 148
        },
        {
          "branch_id": 3,
          "book_id": 80,
          "frequency": 18
        },
        {
          "branch_id": 3,
          "book_id": 50,
          "frequency": 130
        },
        {
          "branch_id": 1,
          "book_id": 5,
          "frequency": 62
        },
        {
          "branch_id": 3,
          "book_id": 36,
          "frequency": 1
        },
        {
          "branch_id": 1,
          "book_id": 98,
          "frequency": 110
        },
        {
          "branch_id": 3,
          "book_id": 22,
          "frequency": 34
        },
        {
          "branch_id": 1,
          "book_id": 99,
          "frequency": 108
        },
        {
          "branch_id": 1,
          "book_id": 28,
          "frequency": 61
        },
        {
          "branch_id": 2,
          "book_id": 55,
          "frequency": 63
        },
        {
          "branch_id": 3,
          "book_id": 57,
          "frequency": 63
        },
        {
          "branch_id": 1,
          "book_id": 55,
          "frequency": 10
        },
        {
          "branch_id": 3,
          "book_id": 14,
          "frequency": 108
        },
        {
          "branch_id": 2,
          "book_id": 73,
          "frequency": 86
        },
        {
          "branch_id": 1,
          "book_id": 41,
          "frequency": 122
        },
        {
          "branch_id": 2,
          "book_id": 7,
          "frequency": 54
        },
        {
          "branch_id": 2,
          "book_id": 49,
          "frequency": 127
        }])
      ])
    });
};
