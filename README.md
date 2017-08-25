# Team Hustle

Team Hustle is Kiam, Florence, Louis, Nhi, and Ken

# Problem Definition
Programming at TPL has largely been put together from the anecdotal experience and subjective interpretation of branch staff. TPL has a large amount of collected data (borrowing records, branch demographics, catalogue information ) but has largely been under utilized to inform library discussion making. 

This application takes branch browsing data and pulls corresponding abstracts from Toronto Public Library's Opendata catalogue. These abstracts are fed to IBM's Natural Language Understanding Watson service to produce granular book categories. These categories are then aggregated for a specific branch and displayed by their frequency.

# Project State
This project was created for the Myplanet August 2017 fellowship and was brought only to the state of demonstration. Modular functionality is largely in place but the data flow through the application is largely still manual. 

- The Postgres database is set to be seeded with book, category, and branch information.  
- An Express API handles server queries and bringing data from the database to the front end.
- The React client queries the Express API and is returned a JSON file containing a branch's aggregated categories sorted by frequency.

Seeding data that is included with the project has been generated for demonstration. Real seed files can be taken from (https://opendata.tplcs.ca). Branch browsing records included were generated from a small sample of a single branch's browsing data. Functionality to take a general branch's browsing data needs to be implemented. Functionality to programatically feed branch data to Watson also needs to be implemented. 

# Run Instructions
First start up Express Server(`team-hustle`):
- Run `npm install`
- `CREATE DATABASE` in database of choice (Postgres, MySQL, SQLite... etc)
- Run `knex migrate:latest` in `team-hustle` root
- Run `knex seed:run` in root to seed generated demonstration data.
- Run `npm start` to start up server on `localhost:3001`

And then start up React Client (`team-hustle/hustle-client`):
- Run `npm install`
- Run `npm start` to start up website on `localhost:3000`



