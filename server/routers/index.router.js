const router = require('express').Router();
const path = require('path');

const auth = require('./api/auth.router');
const category = require('./api/category.router');
const products = require('./api/products.router');

router.use('/api/auth', auth);
router.use('/api/categories', category);
router.use('/api/products', products);

module.exports = router;
