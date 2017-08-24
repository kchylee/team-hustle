exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      let dataset = require('./fiction_test.json');
      let extracted = [];
      
      for (i in dataset){

          let entries = dataset[i].fields
          let result = {
              isbn: null,  
              title: "",
              author: "",
              abstract: ""        
          }
          
          for (j in entries){
            if (entries[j].hasOwnProperty("520")){
                result.abstract = entries[j]["520"].subfields[0]["a"].replace(/"/g, "");
            }else if(entries[j].hasOwnProperty("245")){
                result.title = entries[j]["245"].subfields[0]["a"];
            }else if(entries[j].hasOwnProperty("020") && result.isbn === null){
                result.isbn = parseInt(entries[j]["020"].subfields[0]["a"]);
            }else if(entries[j].hasOwnProperty("100")){
                result.author = entries[j]["100"].subfields[0]["a"];
            }
          }
      
          if (result.title && result.abstract && result.isbn){
            extracted.push(result);
          }else{
            continue;
          }   
      }
      console.log(extracted.length);
      return Promise.all(extracted);
    })
    .then(function(extracted){
      return knex('books').insert(extracted);
    })
      // Inserts seed entries
    .catch(function(err) {
      console.error(err);
    })
}