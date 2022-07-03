const mongoose = require("mongoose");
const User = require("./models/user");

main()
  .then(() => {
    console.log("Connected to the Database");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://localhost:27017/razerblade");
}

User.deleteMany({});
