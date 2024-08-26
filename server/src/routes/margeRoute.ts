import { Router } from "express";
import MargeController from "../controller/MargeController";

const margeRouter = Router();

const controller = MargeController.getItems

margeRouter.post('/marge',controller);


export default margeRouter