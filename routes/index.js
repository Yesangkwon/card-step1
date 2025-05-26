var express = require('express');
var router = express.Router();

/* Login page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Login', pageName: 'auth/login.ejs' });
});

//로그인의 상태값을 가져오는 방법은
//1)세션, 2)query string, 3)localStorage
//goToMaker() -> maker?id=userID
router.get('/maker', function(req, res, next) {
  const userID = req.query.id
  console.log(userID);
  if(!userID){
    return res.redirect('/')
  } 
  res.render('index', { title: 'maker', pageName: 'maker.ejs', userID:userID });
})

module.exports = router;
