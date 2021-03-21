class NewsController {
    //News index
    index(req, res) {
        res.render('news');
        //news.hdb
    }

    // slug news
    show(req, res) {
        res.send('NEWS DETAIL !!!');
    }
}

module.exports = new NewsController();
