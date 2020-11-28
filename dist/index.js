'use strict';

var _app = require('./app');

var _app2 = _interopRequireDefault(_app);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function listen() {
    const server = _app2.default.listen(8080, () => {
        console.log('Express server listening on %d, in %s mode', 8080, _app2.default.get('env'));
    });
    server.timeout = 300000;
} /* eslint-disable no-console */

listen();
// db.then(() => listen())
//     .catch(err => logger.error(err.message, err))
//     .catch(handleError);