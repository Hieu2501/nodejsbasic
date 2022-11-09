const siteRouter = require('./site');
const userRouter = require('./user');
const apiRouter = require('./api');
const uploadRouter = require('./upload');

function routes(app) {
    app.use('/user', userRouter);
    app.use('/api/v1', apiRouter);
    app.use('/upload', uploadRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
