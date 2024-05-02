import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import compress from 'compression';
import methodOverride from 'method-override';
import cors from 'cors';
import helmet from 'helmet';
import router from '../routes/ticket.route.js';
import * as error from '../middleware/error.js';

const app = express();

app.use(morgan('dev'));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// gzip compression
app.use(compress());

// alow override methods in 'X-HTTP-Method-Override' header
app.use(methodOverride('X-HTTP-Method-Override'));

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
app.use('/', router);

// handle error
app.use(error.apiError);

// catch 404 and forward to error handler
app.use(error.notFound);

export default app;
