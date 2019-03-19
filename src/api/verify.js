const SERVER_URL = require("./../utils/globalServerUrl");
const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");

router.post("/verify", async function(req, res) {
  console.log("g");
  const results = await fetch("http://localhost:8000/verify", {
    // change this to actual server
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      token: req.body.token
    })
  });
  const parsed = await results.json();
  res.send(parsed);
});

module.exports = router;
