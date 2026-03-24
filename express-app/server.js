const express = require('express');
const path = require('path');

const app = express();
const PORT = 4000;

// Set EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Serve static files from public
app.use(express.static(path.join(__dirname, 'public')));

/** Signature salads for /order (SaladCard props) */
const ORDER_SALADS = [
  { name: 'Ave Cesar', price: 15.9, desc: 'Roasted white sweet potato, parmesan, avocado, crispy bacon, cherry tomatoes, crispy pitas, spring onions, batavia', image: '/images/ave-cesar.webp', nutrition: { calories: 480, protein: 14, carbs: 36, fat: 28, fiber: 12 } },
  { name: 'Tangerine Crunch', price: 14.9, desc: 'Clementine, edamame, crispy chickpeas, carrots, avocado, cherry tomatoes, sesame seeds, mesclun, batavia', image: '/images/amore-mio.webp', nutrition: { calories: 450, protein: 16, carbs: 40, fat: 24, fiber: 10 }, tag: "Chef's Pick" },
  { name: 'Big Crispy', price: 15.9, desc: 'Quinoa, avocado, roasted crispy chicken breast, candied tomatoes, crispy onion, baby spinach, batavia', image: '/images/big-crispy.webp', nutrition: { calories: 380, protein: 22, carbs: 28, fat: 18, fiber: 6 } },
  { name: 'Super Sour', price: 13.9, desc: 'Avocado, raw broccoli florets, sun-dried tomatoes, crispy pitas, sunflower seeds, arugula, batavia', image: '/images/amore-mio.webp', nutrition: { calories: 410, protein: 15, carbs: 35, fat: 24, fiber: 9 } },
  { name: 'Mexican Dream', price: 14.9, desc: 'Roasted chicken breast, cheddar, avocado, red kidney beans, corn, red peppers, cilantro, tortilla, mesclun, batavia', image: '/images/amore-mio.webp', nutrition: { calories: 470, protein: 20, carbs: 38, fat: 26, fiber: 11 } },
  { name: 'Amore Mio', price: 14.9, desc: 'Penne, cucumbers, candied tomatoes, feta, olives, red onion, pine nuts, arugula, mesclun', image: '/images/amore-mio.webp', nutrition: { calories: 420, protein: 18, carbs: 42, fat: 22, fiber: 8 } },
  { name: 'Buffalo Bill', price: 15.9, desc: 'Crispy bacon, hard-boiled egg, blue cheese, cherry tomatoes, avocado, red onion, crispy pitas, batavia', image: '/images/ave-cesar.webp', nutrition: { calories: 520, protein: 24, carbs: 28, fat: 32, fiber: 5 } },
  { name: 'Veggie Madness', price: 14.9, desc: 'Roasted marinated tofu, cucumbers, shredded carrots, raw broccoli, edamame, red cabbage, red onion, sesame seeds, mesclun, batavia', image: '/images/amore-mio.webp', nutrition: { calories: 390, protein: 16, carbs: 34, fat: 22, fiber: 12 } },
];

function chunkArray(arr, size) {
  const out = [];
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
  return out;
}

// Routes
app.get('/', (req, res) => {
  res.render('index', { title: 'Express + EJS + Tailwind' });
});

app.get('/order', (req, res) => {
  res.render('order', {
    title: 'Order — Elle&Dee\'s',
    saladPagesMobile: chunkArray(ORDER_SALADS, 1),
    saladPagesDesktop: chunkArray(ORDER_SALADS, 2),
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
