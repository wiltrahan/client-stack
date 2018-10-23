export interface IClient {
  id: number;
  lastName: string;
  firstName: string;
  phone: string;
  email: string;
  service: string;
}

export interface IClientTable {
  id?: number;
  lastName: string;
  firstName: string;
  phone: string;
}
