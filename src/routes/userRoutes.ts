import { Router } from 'express';
import { registerUser, editUser, deleteUser, listUsers } from '../controllers/userController';

const router = Router();

router.delete('/user/delete', deleteUser);
router.patch('/user/edit', editUser);
router.get('/users/list', listUsers);
router.post('/user/register', registerUser);

export default router;
