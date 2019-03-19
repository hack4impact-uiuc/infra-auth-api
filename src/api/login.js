const router = require("express").Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { sendResponse } = require("./../utils/sendResponse");
const SERVER_URL = require("./../utils/globalServerUrl");

// async apiFetchExample => {
//   const result = await login(res.body.email, res.body.password);
//   const parsed = await result.json();
//   return parsed;
// };

router.post("/login", async function(req, res) {
  event.preventDefault();
  const results = await fetch(SERVER_URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailInput,
      password: passwordInput
    })
  });

  const resp = await results.json();

  if (!resp.token) {
    sendResponse(res, 400, resp.message);
  } else {
    sendResponse(res, 200, resp.message, {
      token: resp.token,
      userID: resp.uid,
      permission: resp.permission
    });
  }
});

module.exports = router;
