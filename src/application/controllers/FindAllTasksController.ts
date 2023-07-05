import { FindAllTasksUseCase } from '@/domain';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class FindAllTasksController {
  async handle(request: Request, response: Response) {
    try {
      const findAllTasksUseCase = container.resolve(FindAllTasksUseCase);

      const tasks = findAllTasksUseCase.execute();

      return response.json(tasks);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
