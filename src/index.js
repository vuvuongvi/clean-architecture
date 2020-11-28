/* eslint-disable no-console */
import app from './app';


function listen() {
    const server = app.listen(8080, () => {
        console.log('Express server listening on %d, in %s mode', 8080, app.get('env'));
    });
    server.timeout = 300000;
}
listen();
// db.then(() => listen())
//     .catch(err => logger.error(err.message, err))
//     .catch(handleError);
