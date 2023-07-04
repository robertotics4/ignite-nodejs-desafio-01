import { Task } from '@/domain/entities';

export namespace CreateTask {
  export type Input = {
    title: string;
    description?: string;
  };
}

export interface ICreateTaskUseCase {
  execute(data: CreateTask.Input): Task;
}
