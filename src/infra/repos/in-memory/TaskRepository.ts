import { ITaskRepository, Task } from '@/domain';
import { randomUUID } from 'node:crypto';

export class TaskRepository implements ITaskRepository {
  private readonly tasks: Task[] = [];

  create(data: Omit<Task, 'id'>): Task {
    const task = new Task(data);
    task.id = randomUUID();

    this.tasks.push(task);

    return task;
  }

  findAll(): Task[] {
    return this.tasks;
  }

  findById(id: string): Task | undefined {
    return this.tasks.find(task => task.id === id);
  }

  delete(id: string): number {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if (taskIndex >= 0) {
      this.tasks.splice(taskIndex, 1);

      return 1;
    }

    return 0;
  }

  update(id: string, data: Omit<Task, 'id'>): Task | undefined {
    const taskIndex = this.tasks.findIndex(task => task.id === id);

    if (taskIndex >= 0) {
      const updated = Object.assign(this.tasks[taskIndex], {
        ...data,
      });

      return updated;
    }

    return undefined;
  }
}
