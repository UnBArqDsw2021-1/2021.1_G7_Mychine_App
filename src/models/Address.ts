export interface AddresCreate {
  userId: number;
  cep: string;
  city: string;
  state?: string;
  street?: string;
  number: number;
  complement?: string;
}

export interface AddresUpdate {
  // cep?: string;
  city?: string;
  state?: string;
  street?: string;
  // number?: string;
  complement?: string;
}
