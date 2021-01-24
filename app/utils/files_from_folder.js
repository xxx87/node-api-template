const fs = require("fs");
const path = require("path");

module.exports = (dir) => {
  let resultArr = [];
  walkSync(dir, function (filePath) {
    if (path.extname(filePath) === ".js" && filePath.charAt(0) !== "~") resultArr.push(filePath);
  });

  function walkSync(currentDirPath, callback) {
    fs.readdirSync(currentDirPath).forEach(function (name) {
      let filePath = path.join(currentDirPath, name);
      let stat = fs.statSync(filePath);
      if (stat.isFile()) {
        callback(filePath);
      } else if (stat.isDirectory()) {
        walkSync(filePath, callback);
      }
    });
  }
  return resultArr;
};
