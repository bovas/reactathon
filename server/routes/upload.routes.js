import { Router } from 'express';
import * as JobsController from '../controllers/fileupload.controller';
const router = new Router();

// Get all Jobss
router.route('/upload').get(JobsController.uploadDoc);

export default router;
