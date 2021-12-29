const mongoose = require("mongoose");

const dayViseQuestionSchema = mongoose.Schema(
  {
    day:{
      type: String,
      required: true,
    },
    questionsArray : {
      type:Array
    }
  },
  {
    timestamps: true,
  }
);

const DayViseQuestion = mongoose.model("DayViseQuestion", dayViseQuestionSchema );

module.exports = DayViseQuestion;
