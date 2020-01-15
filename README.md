# JobScraper

## Use
This application scrapes current job listings on Indeed for Front-end junior developer positions in the Philadelphia and Houston job markets. This is for personal use, in attempts to broaden the responses from submitted applications.

## Application
Various node packages are utilized in this application. Primarily, cheerio is used to scrape Indeed. Express is used for routing of information to different pages. Mongoose is used to send the scraped data to a MongoDB database and retrieve it to display to the user. Handlebars is used to dynamically display the webpages and the information.
