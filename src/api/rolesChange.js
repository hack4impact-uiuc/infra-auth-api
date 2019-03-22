const SERVER_URL = require("./../utils/globalServerUrl");
const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");

router.post("/roleschange", async function(req, res) {
  console.log(req.body.userEmail);
  console.log(req.body.newRole);

  const results = await fetch("http://localhost:8000/rolesChange", {
    // change this to actual server
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      token: req.headers.token
    },
    body: JSON.stringify({
      userEmail: req.body.userEmail,
      newRole: req.body.newRole
    })
  });
  const parsed = await results.json();
  console.log(parsed);
  res.send(parsed);
});

module.exports = router;
