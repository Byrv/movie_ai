require('dotenv').config({ path: './.env.local' });

const mongoose = require('mongoose');
const app = require('./app');

const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB successfully');
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
})
.catch(err => {
  console.error('Database connection failed', err);
});
