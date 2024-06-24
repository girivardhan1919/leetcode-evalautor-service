import express from "express";

import { addSubmission } from "../../controller/submisstionController";
import { CreateSubmissionZodSchema } from "../../dtos/CreateSubmissionDto";
import { validate } from "../../validators/zodValidator";

const submissionRouter = express.Router();


submissionRouter.post('/', validate(CreateSubmissionZodSchema), addSubmission);

export default submissionRouter;