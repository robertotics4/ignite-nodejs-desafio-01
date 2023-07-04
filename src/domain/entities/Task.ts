type TaskConstructorProps = {
  title: string;
  description?: string;
  updated_at: Date;
};
export class Task {
  id?: string;

  title: string;

  description?: string;

  completed_at?: Date;

  updated_at: Date;

  constructor(taskData: TaskConstructorProps) {
    this.title = taskData.title;
    this.description = taskData.description;
    this.updated_at = taskData.updated_at;
  }
}
