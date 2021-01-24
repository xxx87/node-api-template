const listFile = require(`${ROOT_APP}/app/utils/files_from_folder`);

module.exports = (app) => {
  let dir_routers = `${ROOT_APP}/app/routers`;

  let routers_list = listFile(dir_routers);
  routers_list.forEach((file) => {
    app.use(`${cfg.api_info}`, require(file));
  });
  app.get("*", (req, res) => {
    res.status(404).send("Page not found");
  });
};
