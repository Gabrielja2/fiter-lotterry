export interface ITicket {
  ticketId: number;
  price: number;
  selectedNumbers?: number[];
}

export type ITicketsList = ITicket[]
