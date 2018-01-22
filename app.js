const express = require('express');
const app = express();
const logger = require('morgan');
const nunjucks = require('nunjucks');
const path = require('path');
const bodyParser = require('body-parser');


const routes = require('./routes');
const models = require('./models');

const env = nunjucks.configure('views', {nocache: true});
app.set('view engine', 'html');
app.engine('html', nunjucks.render);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);

//Could be done with db.sync
models.User.sync({force: true})
.then(function () {
  return models.Page.sync({force: true})
})
.then(function () {
  app.listen(1337, function () {
    console.log('Listening on port 1337');
  });
})
.catch(console.error);
