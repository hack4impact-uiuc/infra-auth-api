const router = require("express").Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");

router.post("/login", async function(req, res) {
  sendResponse(res, 400, "TODO");
});

module.exports = router;
