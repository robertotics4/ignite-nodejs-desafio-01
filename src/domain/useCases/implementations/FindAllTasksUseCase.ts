import { Task } from '@/domain/entities';
import { ITaskRepository } from '@/domain/contracts';
import { inject, injectable } from 'tsyringe';
import { IFindAllTasksUseCase } from '../interfaces';

@injectable()
export class FindAllTasksUseCase implements IFindAllTasksUseCase {
  constructor(
    @inject('TaskRepository')
    private tasksRepository: ITaskRepository,
  ) {}

  execute(): Task[] {
    return this.tasksRepository.findAll();
  }
}
