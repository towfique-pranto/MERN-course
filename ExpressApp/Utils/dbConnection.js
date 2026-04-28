const mongoose = require('mongoose');

const dbConnection = async () => {
  await mongoose.connect("mongodb+srv://<user>:<password>@towfiquepranto.b0zczay.mongodb.net/?appName=towfiquepranto");


  console.log("Database connected successfully");
};

module.exports = { dbConnection };