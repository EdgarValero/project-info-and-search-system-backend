const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('>>> DB is Connected'))
  .catch((err) => console.log(err));
