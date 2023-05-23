import {Router} from 'express'
import { sendInstruction } from '../controllers/instruction.controller';
import { basicAuth } from '../helpers/basicAuth';

const router: Router = Router();
router.post('/send',basicAuth, sendInstruction)

export default router;