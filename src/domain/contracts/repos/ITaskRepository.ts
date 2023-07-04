import { Task } from '@/domain/entities';

export interface ITaskRepository {
  create(data: Omit<Task, 'id'>): Task;
  findAll(): Task[];
  findById(id: string): Task | undefined;
  delete(id: string): number;
  update(id: string, data: Omit<Task, 'id'>): Task | undefined;
}
