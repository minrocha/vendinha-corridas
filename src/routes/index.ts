import { Router } from 'express';
import * as PageController from '../controllers/pageController';
import * as SearchController from '../controllers/searchController';

const router = Router();

router.get('/', PageController.home);
router.get('/bermudas', PageController.bermudas);
router.get('/oculos', PageController.oculos);
router.get('/tenis', PageController.tenis);

router.get('/search', SearchController.search);

export default router;
