const siteRouter = require('./site');
const userRouter = require('./user');
const apiRouter = require('./api');

function routes(app) {
    app.use('/user', userRouter);
    app.use('/api/v1', apiRouter);
    app.use('/', siteRouter);
}

module.exports = routes;
