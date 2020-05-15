#!/usr/bin/env node
/*
 * @Author: yang-1213
 * @Date: 2020-05-14 09:43:48
 * @LastEditors: yang-1213
 * @LastEditTime: 2020-05-15 08:55:52
 * @Description:复制文件夹
 */

const fs = require("fs");
const path = require("path");
const ora = require("ora");
const program = require("commander");

let mkDir = require("./utils/mkDir");
let copyFile = require("./utils/copyFile");

// 1. 获取用户参数
// program.version("0.0.2", "-v, --version", "output the current version");
program
    .command("init <dir...>")
    .action(function (init, dir) {
        let $path = init[1];
        console.log(`正在创建${$path}项目`);
        // 2. 命令行旋转
        const spinner = ora(`project is init`).start();
        spinner.color = "yellow";
        spinner.text = "Loading...";

        // 先创建target文件夹
        mkDir(path.resolve(process.cwd(), $path));
        copyFile(path.resolve(__dirname, "src"), path.resolve(process.cwd(), $path));
        setTimeout(() => {
            // 结束
            spinner.stop();
            console.log("\n");
            console.log("初始化完成");
        }, 1000);
    })
    .parse(process.argv);
