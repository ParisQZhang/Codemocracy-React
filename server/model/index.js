const mongoose = require('mongoose');
const mongodbUrl = 'mongodb://localhost:27017/mydb';

mongoose
  .connect(mongodbUrl)
  .then(() => {
    console.log('Mongodb connected 🤟🤘🤘');
  })
  .catch((err) => {
    if (err) console.log(err);
  });

module.exports = mongoose;
