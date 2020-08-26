const dirs = require('../config/dirs');
const path = require('path');

const loader = {}

loader.loadView = (res, viewName) => {
    res.sendFile(path.join(dirs.viewsDir , viewName));
}

module.exports = loader;