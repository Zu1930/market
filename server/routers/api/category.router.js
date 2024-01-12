const router = require('express').Router();
const { Category, Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get('/:id/products', async (req, res) => {
  const { id } = req.params;

  try {
    const category = await Product.findAll({ where: { category_id: id } });
    res.status(200).json(category);
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

module.exports = router;
