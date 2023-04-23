// app.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.static('public'));


const navLinks = [
  { name: 'Home', url: '/' },
  { name: 'About', url: '/page1' },
  { name: 'Portfolio', url: '/page2' },
  { name: 'Services', url: '/page3' },
  { name: 'Contact', url: '/page4' },
];

app.get('/', (req, res) => {
  res.render('index', { navLinks });
});

app.get('/page1', (req, res) => {
  res.send('Page 1');
});

app.get('/page2', (req, res) => {
  res.send('Page 2');
});

app.get('/page3', (req, res) => {
  res.send('Page 3');
});

app.get('/page4', (req, res) => {
  res.send('Page 4');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
