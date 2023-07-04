import { Task } from '@/domain/entities';

export namespace CreateTask {
  export type Input = {
    title: string;
    description?: string;
    completed_at?: Date;
    updated_at?: Date;
  };
}

export interface ICreateTask {
  execute(data: CreateTask.Input): Task;
}
