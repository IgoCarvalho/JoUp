const express = require('express');
const cors = require('cors');
require('dotenv/config');

const routes = require('./routes');

require('./config/database');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
