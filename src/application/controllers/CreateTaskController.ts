import { CreateTaskUseCase } from '@/domain';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

export class CreateTaskController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { title, description } = request.body;

      const createTaskUseCase = container.resolve(CreateTaskUseCase);

      const result = createTaskUseCase.execute({ title, description });

      return response.status(201).json(result);
    } catch (error: any) {
      return response.status(400).json({ message: error.message });
    }
  }
}
