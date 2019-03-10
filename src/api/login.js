const router = require("express").Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { sendResponse } = require("./../utils/sendResponse");
const API_URL = "http://127.0.0.1:8000";

async apiFetchExample => {
  const result = await login(res.body.email, res.body.password);
  const parsed = await result.json();
  return parsed;
};

router.post("/login", async function(req, res) {
  event.preventDefault();
  const results = await fetch(`http://localhost:8000/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: emailInput,
      password: passwordInput
    })
  });

  await results.json().then(resp => {
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
});

module.exports = router;
