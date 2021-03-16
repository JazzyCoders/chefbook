const path = require("path")

/* NAMED EXPORT */
exports.index = (req, res, next) => {
  /*     console.log(__dirname)
      console.log(path.resolve(__dirname , "../views/index.html")) */
  console.log(req.query)

  res.sendFile(path.resolve(__dirname, "../build/index.html"))
}