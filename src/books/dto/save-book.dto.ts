import { Type } from '../schemas/books.schema';

export class SaveBook {
   title: string;
   description: string;
   author: string;
   price: number;
   type: Type;
   dataOfPublication : string;
}