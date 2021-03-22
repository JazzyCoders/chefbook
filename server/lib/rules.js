const { body } = require("express-validator");

const rules = [
  body("firstName")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("please provide us with firstName"),
  body("lastName")
    .trim()
    .notEmpty()
    .escape()
    .withMessage("please provide us with lastName"),
    body("email")
    .isEmail()
    .trim()
    .normalizeEmail()
    .withMessage("this is invalid email"),
    body("password").isLength({ min: 6 }).withMessage("password too short"),
]


module.exports = rules;