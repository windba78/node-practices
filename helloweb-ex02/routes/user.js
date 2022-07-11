var express = require('express');

var router = express.Router();

router.route('').get(function (req, res) {
  res.render('user/info', {
    no: req.query.no || 0
  });
});

router.route('/:no').get(function (req, res) {
  res.render('user/info', {
    no: req.params.no || 0
  });
});

router.route('/join').get(function (req, res) {
  res.render('user/join');
});

router.route('/join').post(function (req, res) {
  console.log(req.body);
  res.redirect('/');
});

router.route('/api').get(function (req, res) {
  vo = {
    no: 10,
    name: '둘리',
    email: 'dooly@gamil.com',
    gender: 'male'
  };
  res.send(vo);
});

module.exports = router;