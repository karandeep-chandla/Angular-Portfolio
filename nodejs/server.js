var express = require('express');
var app = express();

var mongoose = require('mongoose');
var bodyparser = require('body-parser');

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(function(req, res, next) {

    res.header('Access-control-Allow-Origin', '*');
    //res.header('Access-control-Allow-Origin','http://localhost:4200');
    res.header('Access-control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-control-Allow-Headers', 'Content-Type');
    res.header('Access-control-Allow-Credentials', true),
        next();

});

mongoose.connect('mongodb://localhost/mydb'); //connection with data base is made here!

var userrouter = require('./server/routes/user-api.js');
app.use('/user', userrouter);

var countryrouter = require('./server/routes/country-api.js');
app.use('/country', countryrouter);

var registerrouter = require('./server/routes/register-api.js');
app.use('/register', registerrouter);

app.get('/', function(req, res) {
    res.send('hello get');
});

// app.get('/list', function(req, res) {
//     res.send({
//         message: 'Submit List'
//     });
// });

// app.put('/update', function(req, res) {
//     res.send({
//         message: 'Update List'
//     });
// });

// app.put('/delete', function(req, res) {
//     res.send({
//         message: 'Delete List'
//     });
// });

app.listen(3000);
console.log("http:localhost 3000");