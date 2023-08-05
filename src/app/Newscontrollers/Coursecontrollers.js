const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class Coursecontrollers {
  show(req, res, next) {
    //GET /course /:slug
    Course.findOne({ slug: req.params.slug })

      .then((course) => {
        res.render("courses/show", { course: mongooseToObject(course) });
      })
      .catch(next);
    // res.send("COURSE + " + req.params.slug);
  }
  //GET /course/create
  create(req, res, next) {
    res.render("courses/create");
  }
  //POST course/store
  async store(req, res, next) {
    const course = new Course(req.body);
    await course
      .save()
      .then(() => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  }
  update(req, res, next) {
    const params = req.params;
    Course.findById(params)
      .then((course) => {
        console.log(course.name);
        res.render("courses/update", { course: mongooseToObject(course) });
      })
      .catch(next);
  }
  updated(req, res, next) {
    console.log(req);
    Course.updateOne({ _id: req.params._id }, req.body)
      .then(() => {
        res.redirect("/me/create/mycourses");
      })
      .catch(next);
  }
  destroy(req, res, next) {
    console.log(req.body);
    Course.deleteOne({ _id: req.params._id })
      .then(() => {
        res.send("back");
      })
      .catch(next);
  }
}
module.exports = new Coursecontrollers();
