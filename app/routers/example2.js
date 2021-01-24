const sp = "/auth"; // specific path
const router = require("express").Router();
const Example_2_Controller = require(`${ROOT_APP}/app/controllers/example2`);
// const VerifyToken = require(`${ROOT_APP}/sys_core/utils/verify_token`);

// middleware that is specific to this router
// router.use(function timeLog(req, res, next) {
//   console.log("Time: ", Date.now());
//   next();
// });

router.post(`${sp}/login`, Example_2_Controller.login);
router.get(`${sp}/logout`, Example_2_Controller.logout);
module.exports = router;
