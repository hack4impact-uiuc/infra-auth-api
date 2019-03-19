const router = require("express").Router();
const cors = require("cors");
const jwt = require("jsonwebtoken");
// const fetch = require("isomorphic-unfetch");
const { sendResponse } = require("./../utils/sendResponse");
const SERVER_URL = require("./../utils/globalServerUrl");

// async apiFetchExample => {
//   const result = await login(res.body.email, res.body.password);
//   const parsed = await result.json();
//   return parsed;
// };

router.post("/register", async function(req, res) {
  console.log("HERE");
  // event.preventDefault();
  console.log(req.body);
  const body = {
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  console.log(body);
  try {
    // const url = SERVER_URL + "/register"
    const results = await fetch("http://localhost:8000/register/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    });

    const resp = await results.json();
    console.log(resp);

    if (!resp.token) {
      sendResponse(res, 400, resp.message);
    } else {
      sendResponse(res, 200, resp.message, {
        token: resp.token,
        userID: resp.uid,
        permission: resp.permission
      });
    }
  } catch (e) {
    console.log("FAIL");
    console.log(e);
  }
});

module.exports = router;
