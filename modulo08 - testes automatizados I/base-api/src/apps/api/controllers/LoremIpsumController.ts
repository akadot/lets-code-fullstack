import { Request, Response, NextFunction } from "express";
import { LoremIpsumService } from "../../../services/LoremIpsumService";

interface LoremIpsum {
	qtdPalavras: number
}

export class LoremIpsumController {
	#service: LoremIpsumService;

	constructor() {
		this.#service = new LoremIpsumService();
	}

	getLoremIpsum = (req: Request<LoremIpsum>, res: Response, next: NextFunction) => {
		const { qtdPalavras } = req.query;

		return res.status(200).json({
			result: this.#service.getLoremIpsum(
				Number(qtdPalavras)
			),
		});
	};
}
