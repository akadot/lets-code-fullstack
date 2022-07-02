import { Request, Response, NextFunction } from "express";
import { SortService, TipoOrdenacao } from "../../../services/SortService";

interface SortRequest {
	arr: string[] | number[],
	removerDuplicados: boolean,
	ordenacao?: TipoOrdenacao
}

export class SortController {
	#service: SortService;

	constructor() {
		this.#service = new SortService();
	}

	getSort = (req: Request<SortRequest>, res: Response, next: NextFunction) => {
		const { arr, removerDuplicados, ordenacao } = req.body;

		return res.status(200).json({
			result: this.#service.getSort(
				arr as string[] | number[],
				Boolean(removerDuplicados),
				ordenacao as any
			),
		});
	};
}
