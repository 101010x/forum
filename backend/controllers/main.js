const Form = require('../models/main')

exports.viewResponses = (req, res, next) => {
    Form.find().then((data) => {
        res.status(200).json(data);
      }).catch((error) => {
      res.status(400).json({
          error: error
      });
    });
};

exports.submitResponses = (req, res, next) => {
    const userResponses = new Form({
        question_number: req.body.qno,
        question: req.body.question,
        answer: req.body.answer,
        reason: req.body.reason,
        reason_question: req.body.reason_question,
        reason_answer: req.body.reason_answer
    })
    userResponses.save().then(() => {
        res.status(201).json({
            message: 'Form successfully submitted'
        });
    }).catch((error) => {
        res.status(500).json({
            error: error
        });
    });
};
