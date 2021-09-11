#!/usr/bin/env node
// 分包
const lib = require("rainbow-test");
lib.sum(2, 5);

// 任务：注册一个命令 rainbow-test-cli init
const argvs = require("process").argv;
let command = argvs[2];
// options解析
let options = argvs.slice(3);
let [option, param] = options;
option = option && option.replace(/--/g, "");
if (command) {
  if (lib[command]) {
    lib[command]({ option, param });
  }
} else {
  console.log("请输入命令参数");
}

// 全局命令的解析
if (command) {
  if (command.startsWith("--") || command.startsWith("-")) {
    let globaOptions = command.replace(/--|-/g, "");
    if (globaOptions === "version" || globaOptions === "V") {
      console.log("1.0.0");
    }
  }
} else {
  console.log("请输入命令");
}
