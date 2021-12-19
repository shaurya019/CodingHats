const dayViseQuestion = require("../models/dayViseQuestion");
const Questions = require("../models/Question");

const router = require("express").Router();

router.post("/", async (req, res) => {
  try {
    const newData = new dayViseQuestion(req.body);

    const savedData = await newData.save();

    res.status(201).json(savedData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
    const day = req.query.day;
    let list = [];
  try {
   list = await dayViseQuestion.find({ day : day })

   list = list[0].questionsArray;

   let questionsList = [];
   
   for(let i =0; i < list.length; i++){
     let question = await Questions.findOne({ _id : list[i] });
     questionsList.push(question);
   } 

    res.status(201).json(questionsList);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
