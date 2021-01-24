const jwt = require("jsonwebtoken"); // used to create, sign, and verify tokens

function verifyToken(req, res, next) {
  // check header or url parameters or post parameters for token
  let token = req.headers["authorization"],
    result = null;

  if (!token) {
    return res.status(401).send({ auth: false, message: "No token provided." });
  } else {
    try {
      result = token.substr(token.indexOf(" ") + 1);
    } catch (error) {
      return res.status(401).send({ auth: false, message: error.message });
    }
    // verifies secret and checks exp
    jwt.verify(result, cfg.session.secret, function (err, decoded) {
      if (err) {
        return res.status(401).send({ auth: false, message: "Failed to authenticate token." });
      }
      next();
    });
  }
}

module.exports = verifyToken;
