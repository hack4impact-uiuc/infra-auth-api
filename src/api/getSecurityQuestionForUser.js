const router = require("express").Router();

router.get("/getSecurityQuestionForUser", async function(req, res) {
  const results = await fetch("http://localhost:8000/getSecurityQuestionForUser", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      ...req.headers
    },
    body: {
      email: req.body.email
    }
  });
  const parsed = await results.json();
  res.send(parsed);
});

module.exports = router;
