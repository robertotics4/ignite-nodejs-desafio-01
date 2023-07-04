export class Task {
  id?: string;

  title: string;

  description?: string;

  completed_at?: Date | null;

  created_at: Date;

  updated_at: Date;

  constructor(taskData: Omit<Task, 'id'>) {
    this.title = taskData.title;
    this.description = taskData.description;
    this.completed_at = taskData.completed_at;
    this.created_at = taskData.created_at;
    this.updated_at = taskData.updated_at;
  }
}
