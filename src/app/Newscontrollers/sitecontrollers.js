const Course = require("../models/Course");
const { mutipleMongooseToObject } = require("../../util/mongoose");
const { default: axios } = require("axios");

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

  getDataByUrl = async (req, res) => {
    try {
      let url = req.body.url;
      if (!url) {
        return res.status(200).json({ message: "Missing URL params..." });
      }
      let data = await axios.get(url);
      console.log(">>>>>", data);
      return res.status(200).json({ ...data.data });
    } catch (error) {
      return res.status(500).json({
        message: "something wrong...",
        detail: JSON.stringify(error.message),
      });
    }
  };
}

module.exports = new Sitecotrollers();
