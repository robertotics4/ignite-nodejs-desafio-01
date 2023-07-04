import { CreateTaskController } from '@/application';
import { Router } from 'express';

const router = Router();

const createTaskController = new CreateTaskController();

router.post('/', createTaskController.handle);

export default router;
