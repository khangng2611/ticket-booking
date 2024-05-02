import path from 'path';
import dotenv from 'dotenv-safe';

const __dirname = path.dirname(new URL(import.meta.url).pathname);
dotenv.config({
  path: path.join(__dirname, '../../.env'),
  example: path.join(__dirname, '../../.env.example'),
});

export default {
  port: process.env.PORT,
  baseURL: `${process.env.BASE_HOST}:${process.env.PORT}`,
  mongoUri: process.env.MONGO_URI,
  logs: 'dev',
};
