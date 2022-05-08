if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const joi = require("joi");
const ejsMate = require("ejs-mate");
const session = require("express-session");
const path = require("path");
const multer = require("multer");
const { storage } = require("./cloudinary");
const upload = multer({ storage });
const { makePredictions } = require("./controllers/PredictController");

const User = require("./models/user");

main()
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/razerblade");
}

app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//SignUp Routes

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});

app.post("/signup", async (req, res) => {
  const { name, password, email } = req.body;
  const newUSer = new User(req.body);
  await newUSer.save();
  res.redirect("/");
});

//Login Routes

app.get("/login", (req, res) => {
  res.render("login.ejs");
});

app.post("/login", (req, res) => {
  res.send("Friday hai!!!");
});

//Home Routes

app.get("/", (req, res) => {
  res.render("home.ejs");
});

//Form Routes

app.get("/form", (req, res) => {
  res.render("form.ejs");
});

/*







*/

let img;
app.post("/form", upload.single("image"), async (req, res) => {
  // try {
  //   const { path, filename } = req.file;
  //   // const { name, email, age, symptoms, gender } = req.body;
  //   const newUser = new User(req.body);
  //   newUser.images = {
  //     url: path,
  //     filename: filename,
  //   };
  //   await newUser.save();
  //   res.redirect("/results");
  // } catch (e) {
  //   res.send(e);
  // }
  img = req.file.path;
  res.redirect("/results");
});

/*







*/

//Result Routes

app.get("/results", (req, res) => {
  res.render("output", { img });
  console.log(makePredictions);
  res.json(makePredictions);
});

//Account Routes

app.get("/about", (req, res) => {
  res.render("about");
});

app.listen(3000, () => {
  console.log("Serving on 3000");
});
