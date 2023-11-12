const express = require("express");
const { user } = require("../Controllers/userDetails.controller");
const router = express.Router();

router.get("/userDetails", user);

module.exports = router;