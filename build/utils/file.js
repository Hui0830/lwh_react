const fs = require('fs-extra');
const path = require('path');

const isDir = (dir) => {
        try {
            return fs.lstatSync(dir).isDirectory();
        } catch (e) {
            return false;
        }
};
const getHasDemoPackages = () => {
        // 返回含有demo目录的组件目录
        const dir = path.join(__dirname, '../../packages');
        const files = fs.readdirSync(dir);
        return files.filter(file => {
            const dir = path.join(__dirname, `../../packages/${file}`);
            if (!isDir(dir)) {
                return false;
            }
            const files = fs.readdirSync(dir);
            return files.includes('demo');
        })
};
const fileContentCopyAndreplace = (source_dir, dist_dir, replace_str, new_str) => {
        let content = fs.readFileSync(source_dir, { encoding: 'utf8'});
        content = content.replace(replace_str, new_str);
        fs.writeFileSync(dist_dir, content);
};

module.exports = {
    getHasDemoPackages,
    fileContentCopyAndreplace,
};