const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");
const fetch = require("node-fetch");

router.post("/google", async function(req, res) {
  const results = await fetch("http://127.0.0.1:8000/google", {
    // change this to actual server
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      tokenId: req.body.tokenId
    })
  });
  const parsed = await results.json();
  //console.log(parsed)
  res.send(parsed);
});

module.exports = router;
