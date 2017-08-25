
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('books').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('books').insert([{
          id: 1,
          isbn: 9781476758763,
          title: 'The last Tudor',
          author: 'Gregory, Philippa',
          abstract: `The latest novel from #1 New York Times bestselling author Philippa Gregory features one of the most famous girls in history, Lady Jane Grey, and her two sisters, each of whom dared to defy her queen. Seventeen-year-old Jane Grey was queen of England for nine days. Her father and his allies crowned her instead of the dead king's half-sister Mary Tudor, who quickly mustered an army, claimed her throne, and locked Jane in the Tower of London. When Jane refused to betray her Protestant faith, Mary sent her to the executioner's block, where Jane transformed her father's greedy power-grab into tragic martyrdom. "Learn you to die," was the advice Jane wrote to her younger sister Katherine, who has no intention of dying. She intends to enjoy her beauty and her youth and fall in love. But she is heir to the insecure and infertile Queen Mary and then to her sister Queen Elizabeth, who will never allow Katherine to marry and produce a Tudor son. When Katherine's pregnancy betrays her secret marriage she faces imprisonment in the Tower, only yards from her sister's scaffold. "Farewell, my sister," writes Katherine to the youngest Grey sister, Mary. A beautiful dwarf, disregarded by the court, Mary keeps family secrets, especially her own, while avoiding Elizabeth's suspicious glare. After seeing her sisters defy the queen, Mary is acutely aware of her own danger, but determined to command her own life. What will happen when the last Tudor defies her ruthless and unforgiving cousin Queen Elizabeth?`
        },
        {
          id: 2,
          isbn: '9781443442312',
          title: 'Grit : the power of passion and perseverance',
          author: 'Duckworth, Angela',
          abstract: `In this must-read book for anyone striving to succeed, pioneering psychologist Angela Duckworth shows parents, educators, athletes, students, and business people--both seasoned and new--that the secret to outstanding achievement is not talent but a focused persistence called "grit." Why do some people succeed and others fail? Sharing new insights from her landmark research on grit, MacArthur "genius" Angela Duckworth explains why talent is hardly a guarantor of success. Rather, other factors can be even more crucial such as identifying our passions and following through on our commitments. Drawing on her own powerful story as the daughter of a scientist who frequently bemoaned her lack of smarts, Duckworth describes her winding path through teaching, business consulting, and neuroscience, which led to the hypothesis that what really drives success is not "genius" but a special blend of passion and long-term perseverance. As a professor at the University of Pennsylvania, Duckworth created her own "character lab" and set out to test her theory. Here, she takes readers into the field to visit teachers working in some of the toughest schools, cadets struggling through their first days at West Point, and young finalists in the National Spelling Bee. She also mines fascinating insights from history and shows what can be gleaned from modern experiments in peak performance. Finally, she shares what she's learned from interviewing dozens of high achievers--from JP Morgan CEO Jamie Dimon to the cartoon editor of The New Yorker to Seattle Seahawks Coach Pete Carroll. Winningly personal, insightful, and even life-changing, Grit is a book about what goes through your head when you fall down, and how that--not talent or luck--makes all the difference`
        },
        {
          id: 3,
          isbn: '9780316225984',
          title: 'The late show',
          author: 'Connelly, Michael',
          abstract: `Renée Ballard works the night shift in Hollywood, beginning many investigations but finishing none as each morning she turns her cases over to day shift detectives. A once up-and-coming detective, she's been given this beat as punishment after filing a sexual harassment complaint against a supervisor. But one night she catches two cases she doesn't want to part with: the brutal beating of a prostitute left for dead in a parking lot and the killing of a young woman in a nightclub shooting. Ballard is determined not to give up at dawn. Against orders and her own partner's wishes, she works both cases by day while maintaining her shift by night. As the cases entwine they pull her closer to her own demons and the reason she won't give up her job no matter what the department throws at her.`
        },{
          id: 4,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 5,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 6,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 7,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 8,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 9,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 10,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 11,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 12,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 13,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 14,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 15,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 16,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 17,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 18,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 19,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 20,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 21,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 22,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 23,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 24,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 25,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 26,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 27,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 28,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 29,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 30,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 31,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 32,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 33,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 34,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 35,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 36,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 37,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 38,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 39,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 40,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 41,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 42,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 43,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 44,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 45,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 46,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 47,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 48,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 49,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 50,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 51,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 52,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 53,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 54,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 55,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 56,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 57,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 58,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 59,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 60,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 61,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 62,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 63,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 64,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 65,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 66,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 67,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 68,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 69,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 70,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 71,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 72,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 73,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 74,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 75,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 76,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 77,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 78,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 79,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 80,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 81,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 82,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 83,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 84,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 85,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 86,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 87,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 88,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 89,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 90,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 91,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 92,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 93,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 94,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 95,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 96,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 97,
          isbn: 1,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 98,
          isbn: 0,
          title: "",
          author: "",
          abstract: ""
        },
        {
          id: 99,
          isbn: 0,
          title: "",
          author: "",
          abstract: ""
        }])
      ])
    });
};
