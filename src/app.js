import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import errorHandler from 'errorhandler';
import methodOverride from 'method-override';
import cookieParser from 'cookie-parser';

// import routes from './routes';
const app = express();
app.use(bodyParser.urlencoded({ limit: '50mb', extended: false }));
app.use(bodyParser.json({ limit: '50mb' }));
app.use(methodOverride());
app.use(cookieParser());
app.use(cors());

app.use(morgan('dev', {
    skip(req, res) {
        return req.originalUrl === '/healthz' && res.statusCode === 200;
    }
}));

if (app.get('env') === 'development') {
    app.use(errorHandler());
}
// app.use('/', routes);

export default app;
