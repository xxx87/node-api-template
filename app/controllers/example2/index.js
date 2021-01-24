const Example_2_Controller = {};

Example_2_Controller.login = async (req, res) => {
  res.status(200).send("LOGIN SUCCESS!!! ");
};
Example_2_Controller.logout = (req, res) => {
  res.status(200).send("LOGOUT SUCCESS!!! ");
};

module.exports = Example_2_Controller;
