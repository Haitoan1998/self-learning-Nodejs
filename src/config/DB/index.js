const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/f8_education_dev");
    console.log("thanh cong");
  } catch (error) {
    console.log("failed");
  }
}

module.exports = { connect };
