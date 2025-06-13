export interface Company {
  name: string;
}

export interface IUser {
  id: number;
  name: string;
  phone: string;
  email: string;
  company: Company;
}
