const { string } = require("joi");
const mongoose = require("mongoose");
const passportLocalMongoose = require("passport-local-mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: String,
  name: String,
  age: Number,
  gender: String,
  symptoms: [String],
  images: {
    url: String,
    filename: String,
  },
  pastDisease: [String],
  results: [String],
});

userSchema.plugin(passportLocalMongoose);

const User = new mongoose.model("User", userSchema);

module.exports = User;
