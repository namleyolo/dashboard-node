var express = require('express');
var router = express.Router();
var Categories = require('./../../models/categories');
var Products = require('./../../models/product');
var Users = require('./../../models/users');


/* GET users listing. */

router.get('/', async  function(req, res, next) {
    const productsPromise = Products.find();
  const categoriesPromise = Categories.find();
  const products   = await productsPromise;
  const categories = await categoriesPromise;

    // let test = new Products({
  //   warranty: "hihi"
  // })
  // await  test.save()

    await Products.deleteMany({warranty: "hihi"}, function (err, response) {
    if (err) {
      console.log(err)
    }
    console.log(response)
  })

  res.render("admin/index",{data: {products, categories}})

});
router.get('/products', async function (req, res, next) {
    let totalProducts = await Products.estimatedDocumentCount()
    let page;
    page = req.query.page || 1;
    let limit;

    if (req.query.limit) {
        limit = req.query.limit > 4 ? 4 : parseInt(req.query.limit)
    } else {
        limit = 2;
    }
    let totalPage = Math.ceil(totalProducts / limit)
    let products = await Products.find().populate("cat_id").limit(limit).skip(limit * page - limit).sort({status: 1})

    // let categories = await Categories.find().populate("productsByCategory")

    res.render('admin/products', {val: products, currentPage: page, pages: totalPage, totalProducts})
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

router.route('/test')
    .get((req, res, _) => {
        res.send("test")
    })
    .post(async function (req, res) {
        console.log(req.body)
        await res.json({"test": "test"})
    })

router.route('/login')
    .get((req, res, _) => {
  res.render("admin/login")
})
    .post(async function (req, res, _) {
  const {username, password} = req.body
        const result = await Users.findOne(username)

        if (result) {
            if (password === result.password)
                return res.redirect("/dashboard")
        }

        res.render("admin/login", {error: "tai khoan khong hop le"})

})


module.exports = router;
