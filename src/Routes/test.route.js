const express = require("express");
const { test } = require("../Controllers/test.controller");
const router = express.Router();

router.get("/", test);

module.exports=router;


