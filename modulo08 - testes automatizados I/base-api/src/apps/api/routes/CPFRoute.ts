import express from "express";
import { CPFController } from "../controllers/CPFController";

const router = express.Router();
const _controller = new CPFController();

router.get("/cpf", _controller.getValidation);
// router.post("/cpf", _controller.generate);

export = router;
