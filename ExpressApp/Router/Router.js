const express = require('express');
const getUser = require('../Controller/getUser');
const router = express.Router();

//GET RERQUEST
router.get("/getuser", getUser)

module.exports = router;