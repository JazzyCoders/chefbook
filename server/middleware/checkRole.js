
exports.isAdmin = (req, res, next) => {

  if (req.user.role !== "Admin" || "Chef") {
    let err = new Error("you are not authorized to get access to this route")
    next(err)
  } else {
    next()
  }
}