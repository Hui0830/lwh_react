const fs = require('fs-extra');
const path = require('path');
const { isDir } = require('../utils/file');

function compile(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const absolutePath = path.join(dir, file);
        if (isDir(absolutePath)) {
            if (/\/demo$/.test(absolutePath)) return;
            return compile(absolutePath);
        }
        if (/\.js$/.test(file)) {
            const content = fs.readFileSync(absolutePath, 'utf-8');
            const outputPath = absolutePath.replace('packages', 'lib');
            fs.outputFileSync(outputPath, content);
        }
    });
}

const dir = path.join(__dirname, '../../packages');
compile(dir);