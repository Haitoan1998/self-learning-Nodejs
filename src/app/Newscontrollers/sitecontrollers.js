const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class Sitecotrollers {
  index(req, res, next) {
    Course.find({})
      .then(function (course) {
        // course = course.map((item) => item.toObject());

        res.render("index", {
          title: "test",
          course: mutipleMongooseToObject(course),
        });
      })
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}
module.exports = new Sitecotrollers();
