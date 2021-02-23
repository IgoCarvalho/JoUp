const express = require('express')
const bodyParser = require('body-parser')

const routes = require('./routes')

require('./config/database')

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.json())
app.use('/api', routes)

app.listen(PORT, () => {
  console.log(`running in port ${PORT}`);
})