export class Task {
  id?: string;

  title: string;

  description?: string;

  completed_at?: Date;

  updated_at?: Date;

  constructor(taskData: Task) {
    this.title = taskData.title;
    this.description = taskData.description;
    this.completed_at = taskData.completed_at;
    this.updated_at = taskData.updated_at;
  }
}
