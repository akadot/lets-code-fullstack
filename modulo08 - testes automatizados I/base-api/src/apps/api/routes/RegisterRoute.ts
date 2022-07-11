import express from "express";
import { RegisterController } from "../controllers/RegisterController";

const router = express.Router();
const _controller = new RegisterController();

router.post("/register", _controller.validaRegister);

export = router;
