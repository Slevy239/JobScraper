const cheerio = require("cheerio");
const axios = require("axios");
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");
const db = require("./models");
const PORT = process.env.PORT || 3000;
const app = express();
const exphbs = require("express-handlebars");

app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

// Make public a static folder
app.use(express.static("public"));


// initalize express-handlebars
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    partialsDir: path.join(__dirname, "/views/layouts/partials")
  })
); app.set("view engine", "handlebars");





mongoose.connect("mongodb://localhost/Jobs", { useNewUrlParser: true });




  app.get("/scrape", function (req, res) {

    axios.get(URLarray[0]).then(function (respsonse) {
      let $ = cheerio.load(respsonse.data);

      $(".jobsearch-SerpJobCard").each(function (i, element) {
        let results = {};


        results.title = $(this).find("div.title").text().replace(/\n/g, '')
        results.company = $(this).find(".company").text().replace(/\n/g, '')
        results.location = $(this).find(".location").text().replace(/\n/g, '');
        results.salary = $(this).find(".salaryText").text().replace(/\n/g, '');
        results.link = "https://www.indeed.com" + $(this).find("a").attr("href");
        results.summary = $(this).find("ul").text()




        db.Jobs.create(results)
          .then(function (dbJobs) {
            console.log(dbJobs)
          })
          .catch(function (err) {
            console.log(err);
          })
      });

    });
  });



// app.get("/houston", function (rwq, res) {
//   db.Houston.find({}, function(err, data) {
//     let hbsObject = {
//       Houston: data
//     }
//     console.log(hbsObject);
//     res.render("houston", hbsObject);
//   })
// })



app.get("/", function (req, res) {
  db.Odds.find({}, function (err, data) {
    var hbsObject = {
      article: data
    };
    console.log(hbsObject);
    res.render("home", hbsObject);
  })
})

// app.post("/delete", function (req, res) {
//   db.Odds.remove({}).then(function (respsonse) {
//     console.log(sesponse)
//     res.json(respsonse)
//   })
// });



app.listen(PORT, function () {
  console.log("App running on port https://localhost:" + PORT + " !");
});
