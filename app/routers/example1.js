const sp = "/specific-path"; // specific path
const router = require("express").Router();
const Example_1_Controller = require(`${ROOT_APP}/app/controllers/example1`);
// const VerifyToken = require(`${ROOT_APP}/app/utils/verify_token`);

router
  .route(`${sp}/crud/`)
  .get(/* VerifyToken, */ Example_1_Controller.CRUD)
  .post(/* VerifyToken, */ Example_1_Controller.CRUD)
  .put(/* VerifyToken, */ Example_1_Controller.CRUD)
  .delete(/* VerifyToken, */ Example_1_Controller.CRUD);
module.exports = router;
