import { CreateTaskController, FindAllTasksController } from '@/application';
import { Router } from 'express';

const router = Router();

const createTaskController = new CreateTaskController();
const findAllTasksController = new FindAllTasksController();

router.post('/', createTaskController.handle);
router.get('/', findAllTasksController.handle);

export default router;
