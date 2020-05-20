var express = require('express');
var router = express.Router();
var Categories = require('./../../models/categories');


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render("admin/index",{"test":"test"})
});
router.get('/products', function(req, res, next) {
  res.render("admin/products",{"products":"products"})
});
router.get('/categories', function(req, res, next) {
  Categories.find({})
  .then(val => {
    console.log(val)
      res.render('admin/categories', { val: val })
  })
  .catch(err => {
      console.log('Error: ', err);
      throw err;
  })
});
router.route('/login')
.get((req,res,next) =>{
  res.render("admin/login")
})
.post(function(req,res,next){
  const {username, password} = req.body
  if (username == "nam" && password == 1 ){
    return res.redirect("/dashboard/")
  }
  res.render("admin/login",{error: "sai cmnr"})

})


module.exports = router;
