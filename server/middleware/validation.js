const { validationResult } = require("express-validator")

const Validation = (rules) => {
  return [
    ...rules,
    //custom middleware
    (req, res, next) => {
      const result = validationResult(req);
      console.log(result);
      if (result.errors.length === 0) {
        next();
      } else {
        let objError = new Error();
        let error = result.errors.map((err) => {
          return { [err.param]: err.msg };
        });
        objError.message = error;
        next(objError);
      }
    },
  ];
};

module.exports = Validation;