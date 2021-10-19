import { Request, Response } from 'express';
import { GetLastThreeMessagesService } from '../services/GetLastThreeMessagesService';

class GetLastThreeMessagesController {
  async handle(request: Request, response: Response) {
    const getLast3MessagesService = new GetLastThreeMessagesService();

    const result = await getLast3MessagesService.execute();

    return response.json(result);
  }
}

export { GetLastThreeMessagesController }