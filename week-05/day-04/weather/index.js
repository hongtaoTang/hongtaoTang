const express = require('express');
const app = express();
const PORT = 3000;

const weatherController = require('./controllers/weatherController');

app.use('/static', express.static('static'));

// set the view engine to ejs
app.set('view engine', 'ejs');

weatherController(app);

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});