const router = require("express").Router();
const nodemailer = require("nodemailer");
const { sendResponse } = require("./../utils/sendResponse");

router.post("/changePassword", async function(req, res) {
  const results = await fetch("http://localhost:8000/changePassword", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: req.header.token
    },
    body: JSON.stringify({
      password: req.body.password
    })
  });
  const parsed = await results.json();
  res.send(parsed);
});

module.exports = router;
