import { Request, Response } from "express";
import { IInstruction } from "../models/Instruction";
import { sendInstructionValidation } from "../helpers/validations";
import WebSocket from "ws";

export const sendInstruction = (req: Request, res: Response) => {
  
   // Validation
   const { error } = sendInstructionValidation(req.body);
   if (error) return res.status(400).json(error.message);

   const instruction = req.body as IInstruction;

   console.log(instruction);

  // send instruction for prey
  // const wss = new WebSocket('ws://localhost:4000');

   res.status(201).json({ message: 'Instruction sent successfully' });
};
