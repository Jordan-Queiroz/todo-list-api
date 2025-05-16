import { Router } from 'express';
import { helloWorld } from '../controllers/itemController';

const router = Router();

router.get('/', helloWorld);

export default router;
