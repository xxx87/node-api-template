const Example_1_Controller = {};

Example_1_Controller.CRUD = async (req, res, next) => {
  res.status(200).send("HELLO WORLD");
};

module.exports = Example_1_Controller;
