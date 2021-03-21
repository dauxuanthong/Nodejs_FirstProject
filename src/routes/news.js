//config
const express = require('express');
const router = express.Router();

        const newsController = require('../app/controllers/NewsController');

//slug news
router.use('/:slug', newsController.show);
// newController.index
router.use('/', newsController.index);

module.exports = router;
