const Question = require("../models/Question");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const newQuestion = new Question(req.body);

    const savedQuestion = await newQuestion.save();

    res.status(201).json(savedQuestion);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
