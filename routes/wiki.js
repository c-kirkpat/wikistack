const express = require('express');
const router = express.Router();


// router.get('/', function(req, res, next) {
//     res.render('index', {title: 'express'});
// });

router.get('/', function(req, res, next){
    res.send('ok')
});

router.post('/', function(req, res, next){
    res.send('posted')
})

router.get('/add', function(req, res, next){
    res.send('added')
})

module.exports = router;