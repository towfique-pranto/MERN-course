require('dotenv').config();
const express = require('express');
const router = require('./Router/Router');
const { dbConnection } = require('./Utils/dbConnection');
const app = express()
const port = process.env.PORT || 3000

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  dbConnection();
})


