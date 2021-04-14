/* NAMED EXPORT */
exports.index = (req, res, next) => {

  console.log(req.query)

  console.log("dishes");
  /* res.sendFile(path.resolve(__dirname, "../build/index.html")) */
  res.send({
    name: "irena popova",
    email: "irenejpopova6@gmail.com",
  });
}
