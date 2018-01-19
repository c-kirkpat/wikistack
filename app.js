const express = require('express');
const logger = require('morgan');
const nunjucks = require('nunjucks');
const parser = require('body-parser');

const routes = require('./routes');

const app = express();
const env = nunjucks.configure('views',{nocache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

