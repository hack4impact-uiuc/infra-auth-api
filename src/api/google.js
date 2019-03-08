const router = require("express").Router();
const { sendResponse } = require("./../utils/sendResponse");

router.post("/google", async function(req, res) {
  sendResponse(res, 400, "TODO");
});

module.exports = router;
