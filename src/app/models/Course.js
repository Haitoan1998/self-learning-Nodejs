const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const mongooseDelete = require("mongoose-delete");
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const AutoIncrement = require("mongoose-sequence")(mongoose);
const Course = new Schema(
  {
    _id: { type: Number },
    name: { type: String, require: true }, //required=true bắt buộc phải có
    description: { type: String },
    image: { type: String, require: true }, //required=true bắt buộc phải có
    videoID: { type: String },
    slug: { type: String, slug: "name", unique: true }, // tạo slug từ filed name
  },
  { timestamps: true, _id: false } //tự động thêm createat và updateat
);
Course.query.sortable = function (req) {
  let nameQuery = req.query.column;
  let typeQuery = req.query.type;
  if (req.query.hasOwnProperty("_sort")) {
    const isValidType = ["asc", "desc"].includes(typeQuery);
    return this.sort({
      [nameQuery]: isValidType ? typeQuery : "desc",
    });
  }
  return this;
};
Course.plugin(AutoIncrement);
Course.plugin(mongooseDelete, {
  overrideMethods: true,
  deletedAt: true,
});
module.exports = mongoose.model("Courses", Course);
