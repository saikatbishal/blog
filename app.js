// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/about' },
  { name: 'Portfolio', url: '/portfolio' },
  { name: 'Services', url: '/services' },
  { name: 'Contact', url: '/contact' },
];

app.get('/', (req, res) => {
  res.render('index', { navLinks });
});

app.get('/about', (req, res) => {
  res.render('about', { navLinks });
});

app.get('/portfolio', (req, res) => {
  res.render('portfolio',{ navLinks});
});

app.get('/services', (req, res) => {
  res.render('services',{ navLinks});
});

app.get('/contact', (req, res) => {
  res.render('contact',{ navLinks});
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
