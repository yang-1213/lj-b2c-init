const fs = require("fs");
const path = require("path");
const mkDir = require("./mkDir"); //创建文件夹
/**
 * 递归复制文件夹
 * @param {string} sourcePath 源文件夹
 * @param {string} targetPath 目标文件夹
 */
let copyFile = (sourcePath = "src", targetPath = "dist") => {
    let files = fs.readdirSync(sourcePath); //文件和文件夹数组

    // 遍历
    files.map(fileItem => {
        let pathName = path.resolve(__dirname, sourcePath, fileItem); //拼接文件夹和下面的文件 文件夹
        let targetName = path.resolve(process.cwd(), targetPath, fileItem); //目标文件夹下的文件
        // 判断是否是文件夹  递归
        if (fs.lstatSync(pathName).isDirectory()) {
            // 判断文件夹是否存在
            copyFile(pathName, mkDir(targetName));
        } else {
            // 复制文件到目标文件夹下
            fs.copyFileSync(pathName, targetName);
        }
    });
};
module.exports = copyFile;
