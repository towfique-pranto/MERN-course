const express = require('express');
const { getUser, addUserController } = require('../Controller/getUser');
const router = express.Router();

//GET RERQUEST
// /api/getuser
router.get("/getuser", getUser);

router.post("/addUser", addUserController);

module.exports = router;