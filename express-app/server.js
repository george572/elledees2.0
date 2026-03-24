const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Express + EJS + Tailwind' });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
