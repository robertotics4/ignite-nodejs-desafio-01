import { Task } from '@/domain/entities';
import { ITaskRepository } from '@/domain/contracts';
import { inject, injectable } from 'tsyringe';
import { CreateTask, ICreateTaskUseCase } from '../interfaces';

@injectable()
export class CreateTaskUseCase implements ICreateTaskUseCase {
  constructor(
    @inject('TaskRepository')
    private tasksRepository: ITaskRepository,
  ) {}

  execute({ title, description }: CreateTask.Input): Task {
    const task = new Task({
      title,
      description,
      completed_at: null,
      created_at: new Date(),
      updated_at: new Date(),
    });

    const result = this.tasksRepository.create(task);

    return result;
  }
}
