const path = require("path");
const fs = require('fs-extra');
// const copyDir = require('copy-dir');
const replaceInFile = require('replace-in-file');
var build = require('./doc_build/build');

const name = process.argv[2];
let upperName = '' // 大写驼峰名称,用于默认组件命名
name.split('_').forEach(item => {
    upperName += `${item.slice(0,1).toUpperCase()}${item.slice(1)}`;
})

const packageTmplatePath = path.resolve(__dirname, '../docs/views/templates/package'); //组件模版地址
const packagePath = path.resolve(__dirname, '../packages/' + name); // 组件存放地址

const replaceContent = () => {
    const options = {
        files: [
            path.join(packagePath, 'index.jsx'),
            path.join(packagePath, 'index.scss'),
            path.join(packagePath, 'demo/index.jsx'),
            path.join(packagePath, 'demo/base.jsx'),
            path.join(packagePath, 'demo/index.md'),
            path.join(packagePath, 'demo/index.scss'),
        ],
        from: [/lwh_name/g, /lwh_upperName/g],
        to: [name, upperName],
    };
    replaceInFile(options); //将files文件中匹配的内容替换
}

const copyTmplate = () => {
    fs.copy(packageTmplatePath, packagePath, function(err){
        if(err){
            console.error('This package: ' + packagePath + ' to create error!');
            console.log("-----------------error content--------------------");
            console.error(err)
        } else {
            console.info('This package: ' + packagePath + ' to created!');
            build('doc');
            build('nav');
            replaceContent();  //拷贝模版文件到新创建的组件目录并替换其中的内容
        }
    });
}

const checkPackagePath = () => {
    if (!name) {
        console.error('This packages name is not defined!');
        return;
    }
    // 检查组件是否存在
    fs.exists(packagePath, function(exists) {
        if (exists) {
            console.error('The package Path: ' + packagePath + ' already is exists!');
        } else {
            console.log('The package Path: ' + packagePath + ' n\'t exists! Create sucess!');
            copyTmplate();
        }
    })
}

checkPackagePath();