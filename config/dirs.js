const path = require('path');

const dirs = {}
dirs.rootDir = path.dirname(process.mainModule.filename);
dirs.viewsDir = path.join(dirs.rootDir , 'views');
dirs.publicDir = path.join(dirs.rootDir , 'public');

module.exports = dirs;