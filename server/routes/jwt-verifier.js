const { env: { JWT_SECRET } } = process

const jwt = require('jsonwebtoken')

function jwtVerifier(req, res, next) {
  try {
    const { token } = req

    const { sub } = jwt.verify(token, JWT_SECRET)

    req.sub = sub

    next()
  } catch ({ message }) {
    res.json({
      error: message
    })
  }
}

module.exports = jwtVerifier


/* const token = jwt.sign(
  { email: fetchedUser.email, userId: fetchedUser._id },
  "secret_this_should_be_longer",
  { expiresIn: "1h" }
); res.status(200).json({
  token: token,
  expiresIn: 3600,
  userId: fetchedUser._id
}); */