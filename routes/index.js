const express = require('express');
const router = express.Router();
const wikiRouter = require('./wiki.js');
const userRouter = require('./user.js');

router.get('/', function(req, res, next) {
    res.render('index', {title: 'express'});
});

router.use('/wiki', wikiRouter);


module.exports = router;