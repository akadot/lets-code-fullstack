import { Request, Response, NextFunction } from "express";
import { RegisterService } from "../../../services/RegisterService";

interface RegisterRequest {
	nome: String,
	dataNasc: String,
	rua: String,
	num: Number,
	email: String,
	celular: String,
	created_at: String,
	telefone?: String,
	obs?: String,
	profissao?: String,
	primeiroContato?: String,
}

export class RegisterController {
	#service: RegisterService;

	constructor() {
		this.#service = new RegisterService();
	}

	validaRegister = (req: Request<RegisterRequest>, res: Response, next: NextFunction) => {
		const { nome, dataNasc, profissao = "", primeiroContato = null, rua, num, telefone = "", celular, email, obs = "", created_at } = req.body;

		return res.status(200).json({
			result: this.#service.validaRegister(
				String(nome),
				String(dataNasc),
				String(rua),
				Number(num),
				String(email),
				String(celular),
				String(created_at),
				String(telefone),
				String(obs),
				String(profissao),
				String(primeiroContato),
			),
		});
	};
}
