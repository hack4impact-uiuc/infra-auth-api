const SERVER_URL = require("./../utils/globalServerUrl");
const router = require("express").Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { sendResponse } = require("./../utils/sendResponse");

router.post("/addSecurityQuestion", async function(req, res) {
  const results = await fetch(SERVER_URL + "/addSecurityQuestion", {
    // change this to actual server
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      question: req.body.question,
      answer: req.body.answer,
      token: req.body.token
    })
  });
  const parsed = await results.json();
  res.send(parsed);
});

module.exports = router;
