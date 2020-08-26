const loader = require('../util/loader');
const express = require('express');
const router = express.Router();

router.get('/' , (req,res) => {     
    loader.loadView(res , 'index.html');
})

router.get('/users' , (req,res) => {
    loader.loadView(res , 'users.html');
})

router.use('/', (req,res) => {
    res.status(404);
    res.send('404');
})
module.exports = router;