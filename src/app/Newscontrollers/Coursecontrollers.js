const Course = require("../models/Course");
const { mongooseToObject } = require("../../util/mongoose");
class Coursecontrollers {
  show(req, res, next) {
    console.log(req);
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
  store(req, res, next) {
    // Course.findOne({})
    //   .sort({ _id: "desc" })
    //   .then((lastCourse) => {
    //     req.body._id = lastCourse._id + 1;
    const course = new Course(req.body);
    course
      .save()
      .then(() => {
        res.redirect("/me/create/mycourses");
      })
      .catch((err) => {
        console.log(err);
      });
    // });
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
    Course.delete({ _id: req.params._id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  harddestroy(req, res, next) {
    Course.deleteOne({ _id: req.params._id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  restore(req, res, next) {
    Course.restore({ _id: req.params._id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  handleFormAction(req, res, next) {
    switch (req.body.action) {
      case "deleteAll":
        Course.delete({ _id: { $in: req.body.CourseID } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;
      case "create":
        break;
      default:
        res.json({ message: "lỗi" });
    }
  }
  handleFormActionDeleteHard(req, res, next) {
    switch (req.body.action) {
      case "deleteHard":
        Course.deleteMany({ _id: { $in: req.body.CourseID } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;
      case "restore":
        break;
      default:
        res.json({ message: "lỗi" });
    }
  }
  handleFormActionRestore(req, res, next) {
    switch (req.body.action) {
      case "restore":
        Course.restore({ _id: { $in: req.body.CourseID } })
          .then(() => {
            res.redirect("back");
          })
          .catch(next);
        break;
      default:
        res.json({ message: "lỗi" });
    }
  }
}
module.exports = new Coursecontrollers();
