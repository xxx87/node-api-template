const moment = require("moment");
const util = require("util");
const consoleOn = cfg.consoleLog === "true";
const { createLogger, format, transports } = require("winston");
const { combine, timestamp, label, printf } = format;

const myFormat = printf(({ level, message, label, timestamp }) => {
  let formatDate = moment(timestamp).format("DD.MM.YYYY, HH:mm:ss.SSS");
  return `[${formatDate}] [${level}] : ${message}`;
});

const path_to_log = `${ROOT_LOG}/app.log`;

let options = {
  file: {
    level: "warn",
    filename: path_to_log,
    handleExceptions: true,
    json: true,
    maxsize: 5242880, // 5MB
    maxFiles: 5,
    colorize: false
  },
  console: {
    level: "debug",
    handleExceptions: true,
    json: false,
    colorize: true
  }
};

let logger = createLogger({
  format: combine(timestamp(), myFormat),
  transports: [new transports.File(options.file)],
  exitOnError: false
});

if (consoleOn) {
  logger.add(new transports.Console(options.console));
}

function formatArgs(args) {
  return [util.format.apply(util.format, Array.prototype.slice.call(args))];
}

console.error = function () {
  logger.error.apply(null, formatArgs(arguments));
};
console.warn = function () {
  logger.warn.apply(null, formatArgs(arguments));
};
console.info = function () {
  logger.info.apply(null, formatArgs(arguments));
};
console.log = function () {
  logger.debug.apply(null, formatArgs(arguments));
};

module.exports = logger;
