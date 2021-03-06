// const { connect, connection } = require('mongoose');

// const connectionString = 
//     process.env.MONGODB_URI || 'mongodb://localhost:27017/socializeDB';

// connect(connectionString, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// });

// module.exports = connection;

const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
mongoose.connect('mongodb://localhost:27017/aggregateDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;
