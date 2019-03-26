const SERVER_URL = require("./../utils/globalServerUrl");
const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");

router.post("/verifyEmail", async function(req, res) {
  try {
    const results = await fetch("http://localhost:8000/verifyEmail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: req.body.email,
        password: req.body.pin
      })
    });
    const parsed = await results.json();
    if (parsed.status == 200) {
      res.send(parsed);
    } else {
      console.log(parsed);
      sendResponse(res, 400, "Cannot verify the PIN");
    }
  } catch (e) {
    sendResponse(res, 400, e);
  }
});

module.exports = router;
