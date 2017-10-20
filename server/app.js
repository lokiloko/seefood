const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const facebook = require('./routes/facebook.js');
const youtube = require('./routes/youtube.js');
const zomato = require('./routes/zomato.js');
const recipe = require('./routes/recipe.js');
const watson = require('./routes/watson.js');

// parse application/x-www-form-urlencoded
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use('/api/facebook', facebook);
app.use('/api/youtube', youtube);
app.use('/api/zomato', zomato);
app.use('/api/recipe', recipe);
app.use('/api/watson', watson);

app.listen(process.env.PORT || '3000')
