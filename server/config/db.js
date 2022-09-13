const mongoose = require('mongoose');

const dbConnection = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  console.log(`Database connected in ${conn.connection.host}`);
};

module.exports = dbConnection;
