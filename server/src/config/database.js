const mongoose = require('mongoose');

const dbConnectionString = process.env.DB_STRING_CONNECTION || 'mongodb://localhost:27017/joup';

mongoose.connect(dbConnectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

mongoose.connection.on('error', () => console.log('db connection error:'));
mongoose.connection.once('open', () => console.log('db connected'));
