exports.seed = function(knex, Promise) {
  
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      return new Promise((resolve, reject) => {
        let marc = require('marcjs');
        let fs = require('fs');
        let reader = new marc.Iso2709Reader(fs.createReadStream('./db/seeds/msplit00000007.mrc'));
        let record = new marc.Record();
        let results = [];
        let id=1;

        reader.on('data', function(record) {    

          let result = {
            id: id,
            isbn: null,
            title: "",
            author: "",
            abstract: ""
          }
        
          let field = record.fields;

          for (i in field){
            if(field[i][0] === "020" && result.isbn === null){
              result.isbn = parseInt(field[i][3]);
            }else if(field[i][0] === "100" && field[i][3]){
              result.author = field[i][3];
            }else if(field[i][0] === "245" && field[i][3]){
              result.title = field[i][3];
            }else if(field[i][0] === "520" && field[i][3]){
              result.abstract = field[i][3];
            }
          }

          if (result.author && result.isbn && result.abstract && result.title){
            results.push(result);
            id += 1;
          }
        });

        reader.on('end', function() {
          resolve(results)
        });

        // @todo
        // reader.on('error', reject);
      });
    })
    .then(function (results) {
      console.log('Number of entries: ' + results.length);
      return knex('books').insert(results);
    })
    .catch(function(err) {
      console.error(err);
    })
}