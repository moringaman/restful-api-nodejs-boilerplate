import http from "http";
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import config from './config';
import routes from './routes';

let app = express();

app.server = http.createServer(app);

// Middleware

// Passport Config

// API Routes v1

app.use('/v1', routes);

app.server.listen(config.port);

console.log(`Server up & Listening at :${server.address().port}`);

export default app;
