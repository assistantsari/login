// db.js
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/loginapp', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.error('❌ MongoDB connection error:', err));
