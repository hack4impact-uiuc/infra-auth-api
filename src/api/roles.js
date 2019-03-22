const SERVER_URL = require("./../utils/globalServerUrl");
const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");

router.get("/roles", async function(req, res) {
  console.log(req.headers.token);
  const results = await fetch("http://localhost:8000/roles", {
    // change this to actual server
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      token: req.headers.token
    }
  });
  const parsed = await results.json();
  res.send(parsed);
});

module.exports = router;
