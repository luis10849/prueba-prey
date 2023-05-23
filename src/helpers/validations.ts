import Joi from '@hapi/joi';
import {IInstruction} from '../models/Instruction'

export const sendInstructionValidation = (data: IInstruction) => {
    const instructionSchema = Joi.object({
        action: Joi
            .string()
            .required(),
        options: Joi
            .object()
            .required(),
    });
    return instructionSchema.validate(data);
};