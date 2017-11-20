import express from 'express';
import bodyParse from 'body-parser';
import routes from './routes';

const app = express();

app
    .use(bodyParse.json())
    .use(bodyParse.urlencoded({'extended': false}))
    .use('/', routes);

export default app;
