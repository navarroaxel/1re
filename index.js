const path = require('path');
const app = require('connect')();
const config = require('./config.json');

process.env.NODE_ENV = config.mode;

app.use(require('morgan')(config.server.morgan));
app.use(require('compression')());
app.use(require('serve-static')(path.join(__dirname, config.server.static)));

if (config.mode == 'development') {
    app.use(require('serve-static')(path.join(__dirname, 'node_modules/upup/dist')));

    const config = require('./webpack.config');
    const compiler = require('webpack')(config);

    app.use(require('webpack-dev-middleware')(compiler, {
        publicPath: config.output.publicPath,
    }));
    app.use(require('webpack-hot-middleware')(compiler));
}

require('http').createServer(app).listen(config.server.port);
