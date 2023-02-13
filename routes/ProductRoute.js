import express from "express";
import {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controller/Products.js";
import { adminOnly, verifyUser } from "../middleware/AuthUser.js";

const router = express.Router();

router.get('/product', verifyUser, getProducts);
router.get('/product/:uuid', getProductById);
router.post('/product', verifyUser, createProduct);
router.patch('/product/:uuid', updateProduct);
router.delete('/product/:id', verifyUser, deleteProduct);

export default router;