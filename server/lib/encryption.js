const bcrypt = require("bcrypt")

/* create hash password
bcrypt.hash() promise */

/* match password
bcrypt.compare() promise */

exports.encrypt = (password) => {
  if (!password) return "";

  let hashedPassword = bcrypt.hashSync(password, 10)
  return hashedPassword;
}

exports.compare = (password, hashedpassword) => {

  let valid = bcrypt.compareSync(password, hashedpassword)
  return valid;
}