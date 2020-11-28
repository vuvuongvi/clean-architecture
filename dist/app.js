'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _errorhandler = require('errorhandler');

var _errorhandler2 = _interopRequireDefault(_errorhandler);

var _methodOverride = require('method-override');

var _methodOverride2 = _interopRequireDefault(_methodOverride);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import routes from './routes';
const app = (0, _express2.default)();
app.use(_bodyParser2.default.urlencoded({ limit: '50mb', extended: false }));
app.use(_bodyParser2.default.json({ limit: '50mb' }));
app.use((0, _methodOverride2.default)());
app.use((0, _cookieParser2.default)());
app.use((0, _cors2.default)());
app.use((0, _morgan2.default)('dev', {
    skip(req, res) {
        return req.originalUrl === '/healthz' && res.statusCode === 200;
    }
}));

if (app.get('env') === 'development') {
    app.use((0, _errorhandler2.default)());
}
// app.use('/', routes);

exports.default = app;