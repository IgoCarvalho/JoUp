const express = require('express');

const routes = require('./routes');

require('./config/database');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
});
