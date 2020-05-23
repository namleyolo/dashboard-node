var express = require('express');
var router = express.Router();
var Categories = require('./../../models/categories');
var Product = require('./../../models/product');


/* GET users listing. */
router.get('/', async  function(req, res, next) {
  const productsPromise   = Product.find();
  const categoriesPromise = Categories.find();
  const products   = await productsPromise;
  const categories = await categoriesPromise;

  // let test = new Product({
  //   warranty: "hihi"
  // })
  // await  test.save()

  await  Product.deleteMany({warranty: "hihi"}, function (err, response) {
    if (err) {
      console.log(err)
    }
    console.log(response)
  })

  res.render("admin/index",{data: {products, categories}})

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
