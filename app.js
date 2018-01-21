const express = require('express');
const app = express();
const logger = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');

const routes = require('./routes');

const env = nunjucks.configure('views',{nocache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

var server = app.listen(1337, function(){
    console.log('listening on port 1337');
  });
app.use('/', routes);

