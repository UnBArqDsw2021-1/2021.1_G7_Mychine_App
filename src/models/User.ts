import { AddresCreate } from './Address';

export interface UserCreate {
  email: string;
  password: string;
  name: string;
  phone: string;
  cpf?: string;
  isAdm?: boolean;
}

export interface UserUpdate {
  name?: string;
  phone?: string;
  email?: string;
}

export interface CreateAccount {
  User: UserCreate;
  Address: AddresCreate;
}
