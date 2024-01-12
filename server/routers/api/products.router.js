const router = require('express').Router();
const { Product } = require('../../db/models');

router.get('/', async (req, res) => {
  try {
    const products = await Product.findAll();
    res.status(200).json(products);
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.post('/', async (req, res) => {
  const { title, image, price } = req.body;
  try {
    const product = await Product.create({
      title,
      image,
      price,
      category_id: 1,
    });
    res.status(201).json({ message: 'success', product });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.delete('/:id/destroy', async (req, res) => {
  const { id } = req.params;
  try {
    const result = await Product.destroy({ where: { id } });
    if (result > 0) {
      res.status(200).json({ message: 'success' });
      return;
    }
    res.status(400).json({ message: 'Что-то пошло не так' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

router.put('/update/:id', async (req, res) => {
  const { id } = req.params;
  const { adult } = req.body;
  try {
    const result = await Product.update({ adult }, { where: { id } });
    if (result.length > 0) {
      res.status(200).json({ message: 'success' });
      return;
    }
    res.status(400).json({ message: 'disaster' });
  } catch ({ message }) {
    res.status(500).json({ message });
  }
});

module.exports = router;
