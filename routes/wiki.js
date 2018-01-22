const express = require('express');
const router = express.Router();


var models = require('../models');
var Page = models.Page;
var User = models.User;

router.post('/', function (req, res, next) {

    // STUDENT ASSIGNMENT:
    // add definitions for `title` and `content`
    // console.log(req.body);

    var page = Page.build({
        title: req.body.title,
        content: req.body.pageContent,
        urlTitle: req.body.title,
        status: req.body.pageStatus,
    });

    // STUDENT ASSIGNMENT:
    // make sure we only redirect *after* our save is complete!
    // note: `.save` returns a promise or it can take a callback.
    page.save().then((result)=>{
        res.json(result);
    });
    // -> after save -> res.redirect('/');
});
router.get('/', function (req, res, next) {
    res.redirect('/')
});

router.get('/add', function (req, res, next) {
    res.render('addpage');
});
router.get('/:urlTitle', (req, res, next)=>{
    Page.findAll({
        where: {
            urlTitle : req.params.urlTitle
        }
    })
    .then((result)=>{
        res.send(result);
    })
});

module.exports = router;