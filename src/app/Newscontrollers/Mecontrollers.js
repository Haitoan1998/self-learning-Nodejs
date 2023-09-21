const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
class MEcontrollers {
  me(req, res, next) {
    Promise.all([Course.find({}).sortable(req), Course.countDocumentsDeleted()])
      .then((result) => {
        res.render("me/me", {
          course: mutipleMongooseToObject(result[0]),
          count: result[1],
        });
      })
      .catch(next);
  }
  bin(req, res, next) {
    Course.findDeleted()
      .then((course) => {
        console.log(mutipleMongooseToObject(course));
        res.render("me/bin", { course: mutipleMongooseToObject(course) });
      })
      .catch(next);
  }
}
module.exports = new MEcontrollers();
