const path = require('path');
const express = require('express');
var morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

//route config
const routes = require('./routes');

//Static files config
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Http Logger
app.use(morgan('combined'));

//template engine
app.engine('hbs', handlebars({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources\\views'));

routes(app);

/*
app.get('/news', (req, res) => {
  res.render('news');
})
*/

// app.get('/', (req, res) => {
//   res.render('home');
// })

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});
