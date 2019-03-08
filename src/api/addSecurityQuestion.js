const router = require("express").Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { sendResponse } = require("./../utils/sendResponse");

router.post("/addSecurityQuestion", async function(req, res) {
  sendResponse(res, 400, "TODO");
});

module.exports = router;
