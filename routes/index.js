var express = require('express');
var router = express.Router();

/* Login page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login', pageName: 'auth/login.ejs' });
});

//로그인의 상태값을 가져오는 방법은
//1)세션, 2)query string, 3)localStorage
router.get('/maker', function(req, res, next) {
  const email = req.query.email
  console.log(email);
  if(!email){
    return res.redirect('/')
  } 
  res.render('index', { title: 'maker', pageName: 'maker.ejs', email:email });
});

module.exports = router;
