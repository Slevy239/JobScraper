const cheerio = require("cheerio");
const axios = require("axios");
const express = require("express");
var logger = require("morgan");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var path = require("path");
var db = require("./models");
var PORT = process.env.PORT || 3000;
var app = express();
app.use(logger("dev"));
// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false })); // Parses urlencoded bodies
app.use(bodyParser.json()); // Send JSON responses

mongoose.connect("mongodb://localhost/JobsDb", { useNewUrlParser: true });



axios.get("https://www.indeed.com/jobs?q=junior+developer&l=Philadelphia%2C+PA").then(function (respsonse) {
  let $ = cheerio.load(respsonse.data);

  $(".jobsearch-SerpJobCard").each(function (i, element) {
    let results = {};

    // Save the text of the element in a "title" variable


    // title = "";
    // if ($(this).find("a").text().replace(/\n/g, '') === "Junior Software DeveloperSave job") {
    //   title = "Junior Software Developer"
    // } else {
    //   title = $(this).attr("title")
    // }
    results.title = $(this).find("div.title").text().replace(/\n/g, '')
    results.company = $(this).find(".company").text().replace(/\n/g, '')
    results.location = $(this).find(".location").text().replace(/\n/g, '');
    results.salary = $(this).find(".salaryText").text().replace(/\n/g, '');
    results.link = "https://www.indeed.com"+ $(this).find("a").attr("href")



    // Save these results in an object that we'll push into the results array we defined earlier
    // results.push({
    //   title: title,
    //   company: company,
    // location: location,
    // salary: salary
    // });

    db.Jobs.create(results)
      .then(function (dbJobs) {
        console.log(dbJobs)
      })
      .catch(function (err) {
        console.log(err);
      })
  });

})