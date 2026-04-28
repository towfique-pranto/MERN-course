const express = require('express');
const router = require('./Router/Router');
const { dbConnection } = require('./Utils/dbConnection');
const app = express()
const port = 3000

app.use("/api", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  dbConnection();
})

