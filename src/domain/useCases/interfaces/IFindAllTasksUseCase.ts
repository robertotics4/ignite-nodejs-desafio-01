import { Task } from '@/domain/entities';

export interface IFindAllTasksUseCase {
  execute(): Task[];
}
