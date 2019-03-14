const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");

router.get("/roles", async function(req, res) {
  const results = await fetch("http://localhost:8000" + "/roles", {
    // change this to actual server
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      token: req.headers.token
    },
    body: JSON.stringify({
      newRole: req.body.newRole
    })
  });
  const parsed = await results.json();
  res.send(parsed);
});

module.exports = router;
