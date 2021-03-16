const { body } = require("express-validator");

const rules = [
  body("title").notEmpty().isString().isLength({ min: 3 })
    .withMessage("title should be string"),
  body("order").notEmpty().isString().isLength({ min: 3 }).withMessage("password too short"),
  body("date")
    .notEmpty()
    .isInt().isLength({ min: 4 })
    .withMessage("date should be numeric"),
  body("img")
    .trim()
    .notEmpty()
    .isURL()
    .withMessage("img url should be string"),
  body("price")
    .isInt()
    .notEmpty()
    .withMessage("price should be in numeric"),
]


module.exports = rules;