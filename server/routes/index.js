const express = require("express");
const router = express.Router();

const questionRoute = require("./questionRoute");

router.use("./api/question/", questionRoute);
module.exports = router;
