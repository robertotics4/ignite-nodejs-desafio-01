import { Task } from '@/domain/entities';
import { CreateTask, ICreateTask } from '../interfaces';

export class CreateTaskUseCase implements ICreateTask {
  execute(data: CreateTask.Input): Task {
    console.log(data);
    throw new Error('Method not implemented.');
  }
}
