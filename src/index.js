import config from './config/config.js';
import dbConnect from './config/mongoose.js';
import app from './config/express.js';

const { port } = config;

dbConnect();
// listen to requests
app.listen(port, () => console.info(`Server started on port ${port}`));

export default app;
