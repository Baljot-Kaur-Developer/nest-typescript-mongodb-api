import { Module } from '@nestjs/common';
import { MongooseModule, Schema } from '@nestjs/mongoose';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { BooksSchema } from './schemas/books.schema';

@Module({
  // import  books model 
  imports : [MongooseModule.forFeature([{name : 'Books', schema : BooksSchema}])],
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}
