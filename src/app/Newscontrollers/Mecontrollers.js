const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class MEcontrollers {
  me(req, res, next) {
    Course.find({}).then((course) => {
      res.render("me/me", { course: mutipleMongooseToObject(course) });
    });
  }
}
module.exports = new MEcontrollers();
