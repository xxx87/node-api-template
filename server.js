global.ROOT_APP = __dirname; // Устанавливаем глобальный путь к корню проекта
global.ROOT_LOG = `${ROOT_APP}/logs`; // Устанавливаем глобальный путь к каталогу логов

require("dotenv").config({ path: `${ROOT_APP}/.env` }); // Подключаем переменные окружения
global.cfg = require(`${ROOT_APP}/config`); // Устанавливаем глобальный путь к файлу настроек

const winston = require("./config/logging/winston"); // Подключаем логгер
const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

app.listen(cfg.port, () => {
  console.log(`Server started on port: * ${cfg.port} *`);
});

require("./app/routes_connector")(app);

process.on("SIGINT", function () {
  process.exit();
});
process.on("exit", function () {
  console.log("Exiting application ...");
});
