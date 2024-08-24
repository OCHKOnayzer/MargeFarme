import { Router } from "express";
import MargeController from "../controller/MargeController";

const router = Router();

const controller = MargeController.getItems

router.post('/hello world',controller)
