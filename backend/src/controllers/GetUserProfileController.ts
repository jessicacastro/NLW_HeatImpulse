import { Request, Response } from 'express';
import { GetUserProfileService } from '../services/GetUserProfileService';

class GetUserProfileController {
  async handle(request: Request, response: Response) {

    const { user_id } = request;

    const getUserProfileService = new GetUserProfileService();

    const result = await getUserProfileService.execute(user_id);

    return response.json(result);
  }
}

export { GetUserProfileController }