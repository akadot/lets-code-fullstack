import express from "express";
import { LoremIpsumController } from "../controllers/LoremIpsumController";

const router = express.Router();
const _controller = new LoremIpsumController();

router.get("/lorem", _controller.getLoremIpsum);

export = router;
