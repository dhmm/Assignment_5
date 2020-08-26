const dirs = require('./config/dirs');
const express = require('express');
const routes = require('./routes/routes');

const app = express();

app.use(express.static(dirs.publicDir));
app.use(routes);

app.listen(3000);