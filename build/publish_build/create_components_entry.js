const fs = require('fs-extra');
const path = require('path');
const {isDir} = require('../utils/file');

// 存放组件入口文件
let json = {};
const dir = path.join(__dirname, '../../packages');

fs.readdirSync(dir).forEach(file => {
    const absolutePath = path.join(dir, file);
    if (isDir(absolutePath)) {
        json[file] = `./packages/${file}`;
    }
});

console.log(JSON.stringify(json));