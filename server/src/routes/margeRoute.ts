import { Router } from "express";
import MargeController from "../controller/MargeController";

const margeRouter = Router();

const controller = MargeController.getItems

<<<<<<< HEAD
margeRouter.post('/marge',controller);
=======
margeRouter.post('/hello world',controller);
>>>>>>> f42d3b0cdd211754c9748e0dfdb6044634462b5a


export default margeRouter