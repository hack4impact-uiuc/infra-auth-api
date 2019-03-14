const router = require("express").Router();
const nodemailer = require("nodemailer");
const { sendResponse } = require("./../utils/sendResponse");

router.get("/getSecurityQuestion", async function(req, res) {
  const results = await fetch(
    "http://localhost:8000" + "/getSecurityQuestion",
    {
      // change this to actual server
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: req.body.email
      })
    }
  );
  const parsed = await results.json();
  res.send(parsed);
});

module.exports = router;
