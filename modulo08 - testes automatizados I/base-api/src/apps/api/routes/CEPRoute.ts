import express from "express";
import { CEPController } from "../controllers/CEPController";

const router = express.Router();
const _controller = new CEPController();

router.get("/cep/:cep", _controller.getCEP);

export = router;