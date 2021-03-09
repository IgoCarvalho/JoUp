const mongoose = require('mongoose');

const dbConnectionString = 'mongodb://localhost:27017/joup';

mongoose.connect(dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('error', () => console.log('db connection error:'));
mongoose.connection.once('open', () => console.log('db connected'));
