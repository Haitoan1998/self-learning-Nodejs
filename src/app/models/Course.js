const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const slug = require("mongoose-slug-generator");
mongoose.plugin(slug);
const Course = new Schema(
  {
    name: { type: String, require: true }, //required=true bắt buộc phải có
    description: { type: String },
    image: { type: String, require: true }, //required=true bắt buộc phải có
    videoID: { type: String },
    slug: { type: String, slug: "name", unique: true }, // tạo slug từ filed name
  },
  { timestamps: true } //tự động thêm createat và updateat
);
module.exports = mongoose.model("Courses", Course);
