const bodyParser = require('body-parser');
const express = require('express');
const routes = require('./routes/router');
const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use('/', routes);
app.use(express.static('public'));

app.get('/about', (req, res) => res.render('about', { title: 'About' }));
app.get('/contact', (req, res) => res.render('contact', { title: 'Contact Us' }));
app.get('/home', (req, res) => res.render('home', { title: 'Home' }));
app.get('/quality', (req, res) => res.render('quality', { title: 'Quality' }));
app.get('/shop', (req, res) => res.render('shop', { title: 'Shop' }));

app.listen(3000, ()=>{
    console.log('server initialized on http://localhost:3000');
});