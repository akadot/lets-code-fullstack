import { Request, Response, NextFunction } from "express";
import { CPFService } from "../../../services/CPFService";

interface CPFRequest {
	cpf: string
}

export class CPFController {
	#service: CPFService;

	constructor() {
		this.#service = new CPFService();
	}

	getValidation = (req: Request<CPFRequest>, res: Response, next: NextFunction) => {
		const { cpf } = req.query;

		return res.status(200).json({
			result: this.#service.validar(
				String(cpf)
			),
		});
	};
}
