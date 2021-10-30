const mongoose = require("mongoose");

const questionSchema = mongoose.Schema(
  {
    day: {
      type: Number,
    },
    desc: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    solution: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
