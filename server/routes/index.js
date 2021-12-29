const express = require("express");
const DayViseQuestion = require("../routes/dayViseQuestion");
const router = express.Router();

const questionRoute = require("./questionRoute");

router.use("/api/question/", questionRoute);
router.use("/api/dayViseQuestions/",DayViseQuestion);
module.exports = router;
