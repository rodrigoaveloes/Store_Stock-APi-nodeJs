import { Router } from "express";
import * as apiController from '../controllers/apiController'

const router = Router();

router.post('/adicionarproduto', apiController.createProduct);
router.get('/produtos', apiController.allProducts);
router.get('/produto/:id', apiController.getProduct);
router.put('/produto/:id', apiController.updateProduct);
router.delete('/produto/:id', apiController.deleteProduct);






export default router;


