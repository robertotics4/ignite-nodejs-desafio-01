import { ITaskRepository } from '@/domain';
import { TaskRepositoryInMemory } from '@/infra';
import { container } from 'tsyringe';

container.registerSingleton<ITaskRepository>(
  'TaskRepository',
  TaskRepositoryInMemory,
);
