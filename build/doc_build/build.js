const path = require('path');
const util = require('../utils/file');

module.exports = function(type = 'doc') {
    const files = util.getHasDemoPackages();
    let content,source_dir,dist_dir;
    if(type == 'doc') {
        content = files.map(file => {
            return (`
            <Route
                path= '/packages/${file}'
                component={Loadable({
                    loader: () => import('packages/${file}/demo/index'),
                    loading: Loading
                })}
            />`)
        }).join('');
        source_dir = path.join(__dirname, '../../docs/views/templates/doc_routes_template.js');
        dist_dir = path.join(__dirname, '../../docs/views/doc/routes.js');
    } else {
        content = files.map(file => {
            return `{ name: '${file}', path: '/packages/${file}' }`;
        }).join(',');
        source_dir = path.join(__dirname, '../../docs/views/templates/nav_config_template.js');
        dist_dir = path.join(__dirname, '../../docs/views/nav_config.js');
    }
    util.fileContentCopyAndreplace(source_dir, dist_dir, '/**  REPLACE PACKAGES */', content);
}