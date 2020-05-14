const fs = require("fs");
const path = require("path");
/**
 * 创建文件夹
 * @param {string} targetPath 创建的文件夹路径
 * @return {string} tmppath 创建的文件夹路径或者已存在的路径
 */
let mkDir = targetPath => {
    let tmppath = path.resolve(targetPath);
    if (!fs.existsSync(tmppath)) {
        fs.mkdirSync(tmppath);
    }
    return tmppath;
};
module.exports = mkDir;
