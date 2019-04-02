const SERVER_URL = require("./../utils/globalServerUrl");
const router = require("express").Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");

const User = require("../models/User");
const { sendResponse } = require("./../utils/sendResponse");

router.post("/addSecurityQuestion", async function(req, res) {
  const results = await fetch("http://localhost:8000/addSecurityQuestion", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: req.headers.token
    },
    body: JSON.stringify({
      question: req.body.question,
      answer: req.body.answer,
      password: req.body.password
    })
  });
  const parsed = await results.json();
  res.send(parsed);
});

module.exports = router;
