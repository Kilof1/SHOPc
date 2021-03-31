import { Document } from 'mongoose';
import { Product } from './Product';

export interface User extends Document {
  userName: string;
  email: string;
  password: string;
  isAdmin: boolean;
  favourites: Product[];
  shopping: Product[] | [];
  generateAuthToken(): string
  getProfile(): object
}