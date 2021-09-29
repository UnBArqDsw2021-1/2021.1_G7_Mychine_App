export interface AddresCreate {
  cep: string;
  city: string;
  state?: string;
  street?: string;
  number: string;
  complement?: string;
}

export interface AddresUpdate {
  cep?: string;
  city?: string;
  state?: string;
  street?: string;
  number?: string;
  complement?: string;
}
