require('./model/db');
const express = require('express');
const employeeController = require('./controllers/employeeController');
const exphbs = require('express-handlebars');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();
app.use(express.static(path.join(__dirname, './src')));
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, './views'));
app.engine('hbs', exphbs({ extname: 'hbs', defaultLayout: 'mainLayout', layoutsDir: __dirname + '/views/layouts'}));
app.set('view engine', 'hbs');
app.listen(3000, () => {
  console.log(`Server started at port: 3000`);
});

app.use('/employee', employeeController)