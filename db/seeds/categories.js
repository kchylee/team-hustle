
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex('categories').del()
      .then(function () {
        // Inserts seed entries
        return Promise.all([
          knex('categories').insert([{
            "id": 0,
            "name": "/ health and fitness / disease"
          },
          {
            "id": 1,
            "name": "/ technology and computing / software / graphics software"
          },
          {
            "id": 2,
            "name": "/ society / crime / personal offense / homicide"
          },
          {
            "id": 3,
            "name": "/ art and entertainment / visual art and design / drawing"
          },
          {
            "id": 4,
            "name": "/ health and fitness / disease"
          },
          {
            "id": 5,
            "name": "/ sports / basketball"
          },
          {
            "id": 6,
            "name": "/ business and industrial"
          },
          {
            "id": 7,
            "name": "/ art and entertainment / visual art and design / drawing"
          },
          {
            "id": 8,
            "name": "/ family and parenting / children"
          },
          {
            "id": 9,
            "name": "/ pets / dogs"
          },
          {
            "id": 10,
            "name": "/ business and industrial / advertising and marketing / marketing"
          },
          {
            "id": 11,
            "name": "/ travel / travel guides"
          },
          {
            "id": 12,
            "name": "/ sports / basketball"
          },
          {
            "id": 13,
            "name": "/ society"
          },
          {
            "id": 14,
            "name": "/ science / social science / history"
          },
          {
            "id": 15,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 16,
            "name": "/ pets"
          },
          {
            "id": 17,
            "name": "/ health and fitness / dental care"
          },
          {
            "id": 18,
            "name": "/ finance / personal finance / insurance / life insurance"
          },
          {
            "id": 19,
            "name": "/ hobbies and interests / scrapbooking"
          },
          {
            "id": 20,
            "name": "/ family and parenting / children"
          },
          {
            "id": 21,
            "name": "/ law, govt and politics / government"
          },
          {
            "id": 22,
            "name": "/ finance / personal finance / insurance / life insurance"
          },
          {
            "id": 23,
            "name": "/ education / school"
          },
          {
            "id": 24,
            "name": "/ society"
          },
          {
            "id": 25,
            "name": "/ education / school"
          },
          {
            "id": 26,
            "name": "/ family and parenting / children"
          },
          {
            "id": 27,
            "name": "/ sports / tennis"
          },
          {
            "id": 28,
            "name": "/ business and industrial"
          },
          {
            "id": 29,
            "name": "/ health and fitness / disease / heart disease"
          },
          {
            "id": 30,
            "name": "/ sports / canoeing and kayaking"
          },
          {
            "id": 31,
            "name": "/ pets"
          },
          {
            "id": 32,
            "name": "/ family and parenting / children"
          },
          {
            "id": 33,
            "name": "/ family and parenting / babies and toddlers"
          },
          {
            "id": 34,
            "name": "/ art and entertainment / visual art and design / drawing"
          },
          {
            "id": 35,
            "name": "/ sports"
          },
          {
            "id": 36,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 37,
            "name": "/ travel"
          },
          {
            "id": 38,
            "name": "/ health and fitness / dental care"
          },
          {
            "id": 39,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 40,
            "name": "/ education / school"
          },
          {
            "id": 41,
            "name": "/ sports"
          },
          {
            "id": 42,
            "name": "/ sports / tennis"
          },
          {
            "id": 43,
            "name": "/ art and entertainment / visual art and design / drawing"
          },
          {
            "id": 44,
            "name": "/ travel / travel guides"
          },
          {
            "id": 45,
            "name": "/ health and fitness / dental care"
          },
          {
            "id": 46,
            "name": "/ science / ecology / pollution"
          },
          {
            "id": 47,
            "name": "/ sports"
          },
          {
            "id": 48,
            "name": "/ science / medicine / surgery"
          },
          {
            "id": 49,
            "name": "/ pets"
          },
          {
            "id": 50,
            "name": "/ family and parenting"
          },
          {
            "id": 51,
            "name": "/ health and fitness / disease"
          },
          {
            "id": 52,
            "name": "/ art and entertainment"
          },
          {
            "id": 53,
            "name": "/ sports"
          },
          {
            "id": 54,
            "name": "/ business and industrial"
          },
          {
            "id": 55,
            "name": "/ business and industrial"
          },
          {
            "id": 56,
            "name": "/ sports / tennis"
          },
          {
            "id": 57,
            "name": "/ family and parenting / children"
          },
          {
            "id": 58,
            "name": "/ hobbies and interests / games / card games"
          },
          {
            "id": 59,
            "name": "/ hobbies and interests / games / card games"
          },
          {
            "id": 60,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 61,
            "name": "/ travel / travel guides"
          },
          {
            "id": 62,
            "name": "/ science / medicine / surgery"
          },
          {
            "id": 63,
            "name": "/ travel"
          },
          {
            "id": 64,
            "name": "/ business and industrial"
          },
          {
            "id": 65,
            "name": "/ hobbies and interests / needlework"
          },
          {
            "id": 66,
            "name": "/ family and parenting / children"
          },
          {
            "id": 67,
            "name": "/ health and fitness"
          },
          {
            "id": 68,
            "name": "/ business and industrial / company / bankruptcy"
          },
          {
            "id": 69,
            "name": "/ family and parenting / children"
          },
          {
            "id": 70,
            "name": "/ food and drink / food / fruits and vegetables"
          },
          {
            "id": 71,
            "name": "/ pets"
          },
          {
            "id": 72,
            "name": "/ science / mathematics / arithmetic"
          },
          {
            "id": 73,
            "name": "/ food and drink / food / fruits and vegetables"
          },
          {
            "id": 74,
            "name": "/ health and fitness / disease"
          },
          {
            "id": 75,
            "name": "/ science / social science / anthropology"
          },
          {
            "id": 76,
            "name": "/ health and fitness / disease / heart disease"
          },
          {
            "id": 77,
            "name": "/ food and drink / food / fruits and vegetables"
          },
          {
            "id": 78,
            "name": "/ sports"
          },
          {
            "id": 79,
            "name": "/ hobbies and interests / scrapbooking"
          },
          {
            "id": 80,
            "name": "/ business and industrial / business operations / business plans"
          },
          {
            "id": 81,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 82,
            "name": "/ science / social science / history"
          },
          {
            "id": 83,
            "name": "/ education / school"
          },
          {
            "id": 84,
            "name": "/ sports"
          },
          {
            "id": 85,
            "name": "/ science / mathematics / statistics"
          },
          {
            "id": 86,
            "name": "/ art and entertainment / visual art and design / drawing"
          },
          {
            "id": 87,
            "name": "/ family and parenting / children"
          },
          {
            "id": 88,
            "name": "/ science / mathematics / statistics"
          },
          {
            "id": 89,
            "name": "/ family and parenting"
          },
          {
            "id": 90,
            "name": "/ business and industrial / business operations / business plans"
          },
          {
            "id": 91,
            "name": "/ sports"
          },
          {
            "id": 92,
            "name": "/ pets / dogs"
          },
          {
            "id": 93,
            "name": "/ sports / tennis"
          },
          {
            "id": 94,
            "name": "/ technology and computing / consumer electronics / camera and photo equipment / cameras and camcorders / cameras"
          },
          {
            "id": 95,
            "name": "/ hobbies and interests / games / gambling"
          },
          {
            "id": 96,
            "name": "/ sports / tennis"
          },
          {
            "id": 97,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 98,
            "name": "/ family and parenting / children"
          },
          {
            "id": 99,
            "name": "/ sports / tennis"
          },{
            "id": 100,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 101,
            "name": "/ family and parenting / children"
          },
          {
            "id": 102,
            "name": "/ business and industrial / advertising and marketing /marketing"
          },
          {
            "id": 103,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 104,
            "name": "/ business and industrial"
          },
          {
            "id": 105,
            "name": "/ finance / investing / venture capital"
          },
          {
            "id": 106,
            "name": "/ society / work / unemployment"
          },
          {
            "id": 107,
            "name": "/ careers / career planning"
          },
          {
            "id": 108,
            "name": "/ business and industrial / advertising and marketing /marketing"
          },
          {
            "id": 109,
            "name": "/ art and entertainment / books and literature / reference books"
          },
          {
            "id": 110,
            "name": "/ shopping / resources / warranties and service contracts"
          },
          {
            "id": 111,
            "name": "/ family and parenting / children"
          },
          {
            "id": 112,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 113,
            "name": "/ technology and computing / internet technology / email"
          },
          {
            "id": 114,
            "name": "/ business and industrial / business software"
          },
          {
            "id": 115,
            "name": "/ health and fitness / disease / cholesterol"
          },
          {
            "id": 116,
            "name": "/ business and industrial"
          },
          {
            "id": 117,
            "name": "/ business and industrial / business software"
          },
          {
            "id": 118,
            "name": "/ careers / career planning"
          },
          {
            "id": 119,
            "name": "/ sports / running and jogging"
          },
          {
            "id": 120,
            "name": "/ education / teaching and classroom resources / lesson plans"
          },
          {
            "id": 121,
            "name": "/ art and entertainment / comics and animation / comics"
          },
          {
            "id": 122,
            "name": "/ health and fitness / disease / cholesterol"
          },
          {
            "id": 123,
            "name": "/ technology and computing / software / shareware and freeware"
          },
          {
            "id": 124,
            "name": "/ careers / job search"
          },
          {
            "id": 125,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 126,
            "name": "/ business and industrial"
          },
          {
            "id": 127,
            "name": "/ business and industrial / business software"
          },
          {
            "id": 128,
            "name": "/ business and industrial / business operations / human resources"
          },
          {
            "id": 129,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 130,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 131,
            "name": "/ business and industrial / business operations / business plans"
          },
          {
            "id": 132,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 133,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 134,
            "name": "/ technology and computing / consumer electronics / camera and photo equipment / binoculars"
          },
          {
            "id": 135,
            "name": "/ technology and computing / software / shareware and freeware"
          },
          {
            "id": 136,
            "name": "/ art and entertainment / books and literature / reference books"
          },
          {
            "id": 137,
            "name": "/ hobbies and interests / games / board games and puzzles"
          },
          {
            "id": 138,
            "name": "/ finance / investing / venture capital"
          },
          {
            "id": 139,
            "name": "/ society / work / unemployment"
          },
          {
            "id": 140,
            "name": "/ hobbies and interests / games / board games and puzzles"
          },
          {
            "id": 141,
            "name": "/ finance / investing / venture capital"
          },
          {
            "id": 142,
            "name": "/ finance / investing / venture capital"
          },
          {
            "id": 143,
            "name": "/ finance / investing / venture capital"
          },
          {
            "id": 144,
            "name": "/ business and industrial"
          },
          {
            "id": 145,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 146,
            "name": "/ technology and computing / technological innovation"
          },
          {
            "id": 147,
            "name": "/ careers / career planning"
          },
          {
            "id": 148,
            "name": "/ business and industrial / business operations / human resources"
          },
          {
            "id": 149,
            "name": "/ shopping / resources / warranties and service contracts"
          },
          {
            "id": 150,
            "name": "/ business and industrial / business operations / human resources"
          },
          {
            "id": 151,
            "name": "/ hobbies and interests / games / board games and puzzles"
          },
          {
            "id": 152,
            "name": "/ business and industrial / business software"
          },
          {
            "id": 153,
            "name": "/ business and industrial / advertising and marketing /marketing"
          },
          {
            "id": 154,
            "name": "/ art and entertainment / books and literature / reference books"
          },
          {
            "id": 155,
            "name": "/ art and entertainment / books and literature / reference books"
          },
          {
            "id": 156,
            "name": "/ business and industrial / advertising and marketing /marketing"
          },
          {
            "id": 157,
            "name": "/ business and industrial / advertising and marketing / marketing"
          },
          {
            "id": 158,
            "name": "/ business and industrial / business software"
          },
          {
            "id": 159,
            "name": "/ education / teaching and classroom resources / lesson plans"
          },
          {
            "id": 160,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 161,
            "name": "/ art and entertainment / books and literature / reference books"
          },
          {
            "id": 162,
            "name": "/ art and entertainment / books and literature / reference books"
          },
          {
            "id": 163,
            "name": "/ health and fitness / disorders"
          },
          {
            "id": 164,
            "name": "/ art and entertainment / comics and animation / comics"
          },
          {
            "id": 165,
            "name": "/ business and industrial / business operations /business plans"
          },
          {
            "id": 166,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 167,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 168,
            "name": "/ finance / investing / venture capital"
          },
          {
            "id": 169,
            "name": "/ business and industrial / company / earnings"
          },
          {
            "id": 170,
            "name": "/ business and industrial / business operations / human resources"
          },
          {
            "id": 171,
            "name": "/ health and fitness / disease / cholesterol"
          },
          {
            "id": 172,
            "name": "/ health and fitness / disease / cholesterol"
          },
          {
            "id": 173,
            "name": "/ business and industrial / business operations / business plans"
          },
          {
            "id": 174,
            "name": "/ hobbies and interests / games / board games and puzzles"
          },
          {
            "id": 175,
            "name": "/ business and industrial / company / earnings"
          },
          {
            "id": 176,
            "name": "/ sports / running and jogging"
          },
          {
            "id": 177,
            "name": "/ business and industrial"
          },
          {
            "id": 178,
            "name": "/ business and industrial / business operations / business plans"
          },
          {
            "id": 179,
            "name": "/ careers / career planning"
          },
          {
            "id": 180,
            "name": "/ finance / investing / venture capital"
          },
          {
            "id": 181,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 182,
            "name": "/ hobbies and interests / games / board games and puzzles"
          },
          {
            "id": 183,
            "name": "/ art and entertainment / books and literature / reference books"
          },
          {
            "id": 184,
            "name": "/ health and fitness / disease / cholesterol"
          },
          {
            "id": 185,
            "name": "/ art and entertainment / books and literature / reference books"
          },
          {
            "id": 186,
            "name": "/ sports / running and jogging"
          },
          {
            "id": 187,
            "name": "/ society / work / unemployment"
          },
          {
            "id": 188,
            "name": "/ business and industrial"
          },
          {
            "id": 189,
            "name": "/ business and industrial / business operations / business plans"
          },
          {
            "id": 190,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 191,
            "name": "/ business and industrial / business software"
          },
          {
            "id": 192,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 193,
            "name": "/ business and industrial / business operations / human resources"
          },
          {
            "id": 194,
            "name": "/ careers / job search"
          },
          {
            "id": 195,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 196,
            "name": "/ business and industrial / business software"
          },
          {
            "id": 197,
            "name": "/ technology and computing / tech news"
          },
          {
            "id": 198,
            "name": "/ business and industrial / company / earnings"
          },
          {
            "id": 199,
            "name": "/ art and entertainment / books and literature / reference books"
          },
          {
            "id": 200,
            "name": "/ art and entertainment / movies and tv / horror"
          },
          {
            "id": 201,
            "name": "/ education / school"
          },
          {
            "id": 202,
            "name": "/ travel"
          },
          {
            "id": 203,
            "name": "/ art and entertainment / books and literature / non-fiction"
          },
          {
            "id": 204,
            "name": "/ travel"
          },
          {
            "id": 205,
            "name": "/ art and entertainment / books and literature / poetry"
          },
          {
            "id": 206,
            "name": "/ business and industrial / business operations / human resources / compensation and benefits"
          },
          {
            "id": 207,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 208,
            "name": "/ society / unrest and war"
          },
          {
            "id": 209,
            "name": "/ art and entertainment / visual art and design"
          },
          {
            "id": 210,
            "name": "/ business and industrial / business operations / human resources / compensation and benefits"
          },
          {
            "id": 211,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 212,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 213,
            "name": "/ society / unrest and war"
          },
          {
            "id": 214,
            "name": "/ travel"
          },
          {
            "id": 215,
            "name": "/ art and entertainment / music"
          },
          {
            "id": 216,
            "name": "/ art and entertainment / visual art and design"
          },
          {
            "id": 217,
            "name": "/ science"
          },
          {
            "id": 218,
            "name": "/ law, govt and politics / government / government agencies"
          },
          {
            "id": 219,
            "name": "/ finance / investing / futures trading"
          },
          {
            "id": 220,
            "name": "/ sports / running and jogging"
          },
          {
            "id": 221,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 222,
            "name": "/ society / unrest and war"
          },
          {
            "id": 223,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 224,
            "name": "/ law, govt and politics / government"
          },
          {
            "id": 225,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 226,
            "name": "/ business and industrial"
          },
          {
            "id": 227,
            "name": "/ travel"
          },
          {
            "id": 228,
            "name": "/ art and entertainment / books and literature / poetry"
          },
          {
            "id": 229,
            "name": "/ home and garden / bed and bath / bedroom"
          },
          {
            "id": 230,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 231,
            "name": "/ society / unrest and war"
          },
          {
            "id": 232,
            "name": "/ art and entertainment / books and literature / poetry"
          },
          {
            "id": 233,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 234,
            "name": "/ home and garden / bed and bath / bedroom"
          },
          {
            "id": 235,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 236,
            "name": "/ art and entertainment / music"
          },
          {
            "id": 237,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 238,
            "name": "/ education / school"
          },
          {
            "id": 239,
            "name": "/ education / school"
          },
          {
            "id": 240,
            "name": "/ business and industrial"
          },
          {
            "id": 241,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 242,
            "name": "/ law, govt and politics / espionage and intelligence"
          },
          {
            "id": 243,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 244,
            "name": "/ society / work / unemployment"
          },
          {
            "id": 245,
            "name": "/ education / school"
          },
          {
            "id": 246,
            "name": "/ hobbies and interests / magic and illusion"
          },
          {
            "id": 247,
            "name": "/ law, govt and politics / law enforcement / police"
          },
          {
            "id": 248,
            "name": "/ society / work / unemployment"
          },
          {
            "id": 249,
            "name": "/ law, govt and politics / law enforcement / police"
          },
          {
            "id": 250,
            "name": "/ art and entertainment / books and literature / poetry"
          },
          {
            "id": 251,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 252,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 253,
            "name": "/ education / school"
          },
          {
            "id": 254,
            "name": "/ law, govt and politics / espionage and intelligence"
          },
          {
            "id": 255,
            "name": "/ society / unrest and war"
          },
          {
            "id": 256,
            "name": "/ society / work / unemployment"
          },
          {
            "id": 257,
            "name": "/ finance / investing / futures trading"
          },
          {
            "id": 258,
            "name": "/ society / unrest and war"
          },
          {
            "id": 259,
            "name": "/ family and parenting / parenting teens"
          },
          {
            "id": 260,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 261,
            "name": "/ hobbies and interests / guitar"
          },
          {
            "id": 262,
            "name": "/ society / unrest and war"
          },
          {
            "id": 263,
            "name": "/ art and entertainment / visual art and design"
          },
          {
            "id": 264,
            "name": "/ hobbies and interests / guitar"
          },
          {
            "id": 265,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 266,
            "name": "/ family and parenting / parenting teens"
          },
          {
            "id": 267,
            "name": "/ business and industrial / business operations / human resources / compensation and benefits"
          },
          {
            "id": 268,
            "name": "/ law, govt and politics / government"
          },
          {
            "id": 269,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 270,
            "name": "/ science / social science / history"
          },
          {
            "id": 271,
            "name": "/ society / unrest and war"
          },
          {
            "id": 272,
            "name": "/ business and industrial"
          },
          {
            "id": 273,
            "name": "/ family and parenting / parenting teens"
          },
          {
            "id": 274,
            "name": "/ society / unrest and war"
          },
          {
            "id": 275,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 276,
            "name": "/ hobbies and interests / magic and illusion"
          },
          {
            "id": 277,
            "name": "/ business and industrial"
          },
          {
            "id": 278,
            "name": "/ family and parenting"
          },
          {
            "id": 279,
            "name": "/ art and entertainment / books and literature / poetry"
          },
          {
            "id": 280,
            "name": "/ art and entertainment / books and literature / science fiction"
          },
          {
            "id": 281,
            "name": "/ education / school"
          },
          {
            "id": 282,
            "name": "/ science / social science / history"
          },
          {
            "id": 283,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 284,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 285,
            "name": "/ sports / running and jogging"
          },
          {
            "id": 286,
            "name": "/ law, govt and politics / government"
          },
          {
            "id": 287,
            "name": "/ law, govt and politics / government"
          },
          {
            "id": 288,
            "name": "/ law, govt and politics / armed forces / marines"
          },
          {
            "id": 289,
            "name": "/ art and entertainment / books and literature / mythology"
          },
          {
            "id": 290,
            "name": "/ science / social science / history"
          },
          {
            "id": 291,
            "name": "/ art and entertainment / music"
          },
          {
            "id": 292,
            "name": "/ business and industrial"
          },
          {
            "id": 293,
            "name": "/ art and entertainment / movies and tv / movies"
          },
          {
            "id": 294,
            "name": "/ finance / investing / futures trading"
          },
          {
            "id": 295,
            "name": "/ society / unrest and war"
          },
          {
            "id": 296,
            "name": "/ art and entertainment / books and literature"
          },
          {
            "id": 297,
            "name": "/ law, govt and politics / espionage and intelligence"
          },
          {
            "id": 298,
            "name": "/ business and industrial"
          },
          {
            "id": 299,
            "name": "/ art and entertainment / books and literature / science fiction"
          }])
        ])
      });
  };
  