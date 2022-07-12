import fetch from "node-fetch"

export class CEPService {
	obter = async (cep: string) => {
		const response = await fetch(`https://brasilapi.com.br/api/cep/v2/${cep}`)
		const result = await response.json()

		return result
	}
}