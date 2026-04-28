const mongoose = require('mongoose');

const dbConnection = async () => {
  await mongoose.connect("mongodb+srv://towfique_pranto:kGl35TFxHTPO8uMy@towfiquepranto.b0zczay.mongodb.net/?appName=towfiquepranto");


  console.log("Database connected successfully");
};

module.exports = { dbConnection };