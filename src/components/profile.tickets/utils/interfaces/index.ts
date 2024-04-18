export interface ITicket {
  sequency: number; // index dele no array
  value: number; // valor em reais, sem formatação
  // os numeros selecionados, a partir dele da pra vc pegar a quantidade de selecionados
  // pelo length do array
  selectedNumbers: number[];
}

export interface TodosTicketsDoFormulario {
  [key: number]: ITicket;

}
