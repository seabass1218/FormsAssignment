var express = require('express');
var router = express.Router();
var axios = require('axios');
var createController = require("../controllers/createContoller");

/*router.get('/', function (req, res, next) {
    res.render('birds', { Title: 'Bird' });
  });

router.get('/create', function (req, res, next) {
    res.render('create', { Title: 'word' });
  });*/

router.get('/', createController.get_birds);

router.get('/create', createController.get_create_birds);

router.post('/create', createController.post_create_birds);

router.get('/thanks', function (req, res, next) {
  res.render('thanks', { Title: 'word' } );
});

  module.exports = router;