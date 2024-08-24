import { Router } from "express";
import MargeController from "../controller/MargeController";

const margeRouter = Router();

const controller = MargeController.getItems

margeRouter.post('/hello world',controller);


export default margeRouter