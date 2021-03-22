const {body} = require("express-validator");

const rules = [
  body("category").notEmpty().isString().isLength({ min: 3 }).trim()
    .withMessage("title should be string"),
  body("name").notEmpty().isString().isLength({ min: 3 }).withMessage("Dish name not complete"),
  body("img")
    .trim()
    .notEmpty()
    .isURL()
    .withMessage("img url should be string"),
  body("ingredients")
    .notEmpty().isArray()
    .withMessage("ingredients composition"),  
  body("price")
    .isInt()
    .notEmpty()
    .withMessage("price should be in numeric"),
    
]

module.exports = rules;