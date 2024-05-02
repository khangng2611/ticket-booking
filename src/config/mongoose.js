import mongoose from 'mongoose';
import config from './config.js';

const { mongoUri } = config;

mongoose.connection.on('error', (err) => {
  console.error(`MongoDB connection error: ${err}`);
  process.exit(-1);
});

export default function dbConnect() {
  mongoose
    .connect(mongoUri)
    .then(() => console.log('MongoDB connected !'))
    .catch((error) => {
      console.error('MongoDB connection error:', error);
      process.exit(-1);
    });
  return mongoose.connection;
}
