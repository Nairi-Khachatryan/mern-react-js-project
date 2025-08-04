import express from 'express';

import {
  createProduct,
  deleteProduct,
  getAllProducts,
  getProductById,
  updateProduct,
} from '../controllers/product.controller.js';

export const router = express.Router();

router.get('/', getAllProducts);
router.get('/:id', getProductById);

router.post('/', createProduct);
router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);
