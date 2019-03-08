const router = require("express").Router();
const nodemailer = require("nodemailer");
const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");

router.get("/getSecurityQuestion", async function(req, res) {
  sendResponse(res, 400, "TODO");
});

module.exports = router;
