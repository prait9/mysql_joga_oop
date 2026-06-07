const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json());

const articleRoutes = require('./routes/article');
const authorRoutes = require('./routes/author');
app.use('/', articleRoutes);
app.use('/author', authorRoutes);


app.listen(3025, () => {
  console.log('App is started at http://localhost:3025')
});
