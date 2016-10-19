var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set static path
app.use(express.static(path.join(__dirname, 'public')));

app.get('/people', function(req, res) {
    var people = [
        {
            first_name: "John",
            last_name: "Doe",
            age: 34,
            gender: "male"
        },
        {
            first_name: "Ram",
            last_name: "Stha",
            age: 34,
            gender: "male"
        },
        {
            first_name: "Sita",
            last_name: "Pra",
            age: 24,
            gender: "female"
        },
        {
            first_name: "Jonny",
            last_name: "Doe",
            age: 44,
            gender: "male"
        },
    ];

    res.json(people);
});

app.get('/download', function(req, res){
    res.download(path.join(__dirname, '/downloads/pdf-sample.pdf'));
});

app.get('/about', function(req, res){
    res.redirect('/about.html');
});

app.post('/subscribe', function(req, res) {
    var name = req.body.name;
    var email = req.body.email;
    console.log(name + ' has subscribed with ' + email);
});

app.listen(3000, function(){
    console.log('Server started on port 3000');
});