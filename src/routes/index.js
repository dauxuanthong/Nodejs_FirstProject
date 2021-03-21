const newsRouter = require('./news');

function routes(app) {
    //news
    app.use('/news', newsRouter);

    //home
            app.get('/', (req, res) => {
        res.render('home');
    });
}

module.exports = routes;
