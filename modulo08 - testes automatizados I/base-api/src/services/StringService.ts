export class StringService {
	removerDuplicadas = (arr: string[]) => {
		return [... new Set(arr)]
	}
}