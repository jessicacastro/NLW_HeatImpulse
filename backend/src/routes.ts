import { Router } from 'express';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateMessageController } from './controllers/CreateMessageController';
import { GetLastThreeMessagesController } from './controllers/GetLastThreeMessagesController';
import { GetUserProfileController } from './controllers/GetUserProfileController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';

const authenticateUserController = new AuthenticateUserController();
const createMessageController = new CreateMessageController();
const getLastThreeMessagesController = new GetLastThreeMessagesController();
const getUserProfileController = new GetUserProfileController();

const router = Router();

router.post('/authenticate', authenticateUserController.handle);

router.post('/messages', ensureAuthenticated, createMessageController.handle);

router.get('/messages/last3', getLastThreeMessagesController.handle);

router.get('/user/profile', ensureAuthenticated, getUserProfileController.handle);

export { router }