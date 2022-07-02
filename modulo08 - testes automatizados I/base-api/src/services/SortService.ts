export enum TipoOrdenacao {
  Asc = 0,
  Desc = 1
}

export class SortService {
  getSort = (
    arr: string[] | number[],
    removerDuplicados: boolean,
    ordenacao?: TipoOrdenacao
  ) => {
    let res = [...arr];

    if (ordenacao !== undefined && Object.values(TipoOrdenacao).includes(ordenacao!)) {
      res.sort();

      if (ordenacao == TipoOrdenacao.Desc) {
        res.reverse()
      }
    }

    if (removerDuplicados) {
      res = [...new Set(res)];
    }

    return res;
  }

}
