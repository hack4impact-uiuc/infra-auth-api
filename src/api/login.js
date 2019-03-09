const router = require("express").Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { sendResponse } = require("./../utils/sendResponse");
const API_URL = "http://127.0.0.1:8000";

router.post("/login", async function(req, res) {
  const res_email = res.body.email;
  const res_password = res.body.password;

  fetch(API_URL + "/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: res_email,
      password: res_password
    })
  })
    .then(r => r.json())
    .then(resp => {
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
