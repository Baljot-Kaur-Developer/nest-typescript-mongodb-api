import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
export enum Type {
    ADVENTURE = 'Adventure',
    HORROR = 'Horror',
    ROMANTIC = 'Romantic',
    CRIME = 'Crime',
   }
@Schema ({ 
    timestamps : true 
})
export class Books{

    @Prop()
    title : string ;
    @Prop()
    author : string;
    @Prop()
    dataOfPublication : string;
    @Prop()
    description : string;
    @Prop()
    price : number;
    @Prop()
    type : Type;

    
}
export const BooksSchema = SchemaFactory.createForClass(Books);
