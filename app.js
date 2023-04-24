// app.js
const express = require('express');
const app = express();
const port = 3000;
const markdownIt = require('markdown-it');
const axios = require('axios');
const md = new markdownIt();


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

app.get('/', async (req, res) => {
  const owner = 'saikatbishal';
  const repo = 'blog';
  const path = 'src';
  try {
    const response = await axios.get(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`);
    const files = response.data;

    const blogs = [];
    for (const file of files) {
      if (file.type === 'file' && file.name.endsWith('.md')) {
        const contentResponse = await axios.get(file.download_url);
        const content = contentResponse.data;
        const htmlContent = md.render(content);
        blogs.push({ title: file.name.replace('.md', ''), content: htmlContent });
      }
    }

    res.render('index', {navLinks, blogs });
  } catch (error) {
    console.error('Error fetching blogs:', error);
    res.status(500).send('Error fetching blogs');
  }
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
