import SERVER_URL from "../components/globalServerUrl.js";
const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");
const fetch = require("node-fetch");

router.post("/google", async function(req, res) {
  const results = await fetch(SERVER_URL + "/google", {
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
  res.send(parsed);
});

module.exports = router;
