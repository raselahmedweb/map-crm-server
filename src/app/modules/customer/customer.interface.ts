export interface ICustomer {
  _id?: string;
  name: string;
  role: "company" | "person";
  email?: string;
  website?: string;
  logo?: string;
  isDeleted: boolean;
}
