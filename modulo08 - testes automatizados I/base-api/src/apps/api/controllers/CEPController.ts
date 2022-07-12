import { Request, Response, NextFunction } from "express";
import { CEPService } from "../../../services/CEPService";

interface CEPRequest {
	cep: string
}

export class CEPController {
	#service: CEPService;

	constructor() {
		this.#service = new CEPService();
	}

	getCEP = async (req: Request<CEPRequest>, res: Response, next: NextFunction) => {
		const { cep } = req.params;

		const result = await this.#service.obter(cep)

		return res.status(200).json({
			result: result,
		});
	};
}