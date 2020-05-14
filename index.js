#!/usr/bin/env node
/*
 * @Author: yang-1213
 * @Date: 2020-05-14 09:43:48
 * @LastEditors: yang-1213
 * @LastEditTime: 2020-05-14 17:28:20
 * @Description:复制文件夹
 */

const fs = require("fs");
const path = require("path");
const ora = require("ora");
const program = require("commander");

let mkDir = require("./utils/mkDir");
let copyFile = require("./utils/copyFile");

// 1. 获取用户参数
program
    .version("0.0.1", "-v, --version", "output the current version")
    .command("init <dir>")
    .action(function (dir, arg) {
        console.log(dir, arg);
        // 2. 命令行旋转
        const spinner = ora(`${dir} init`).start();
        spinner.color = "yellow";
        spinner.text = "Loading...";

        // 先创建target文件夹
        mkDir(path.resolve(process.cwd(), "dist"));
        copyFile(path.resolve(__dirname, "src"), path.resolve(process.cwd(), "dist"));
        setTimeout(() => {
            // 结束
            spinner.stop();
            console.log("\n");
            console.log("初始化完成");
        }, 1000);
    })
    .parse(process.argv);
