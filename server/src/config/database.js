const mongoode = require('mongoose')

const dbConnection = 'mongodb://localhost:27017/joup';

mongoode.connect(dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
})
  .then(() => {
    console.log('db connected');
  })
  .catch((error) => {
    console.error(error);
  })