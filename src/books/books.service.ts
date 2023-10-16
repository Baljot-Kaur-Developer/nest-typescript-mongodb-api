import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import * as  mongoose  from 'mongoose';
import { Books } from './schemas/books.schema';

// injectable decorator
@Injectable()
export class BooksService {
// constructor injection for model
constructor (
@InjectModel(Books.name)
private bookModel : mongoose.Model<Books>
) {}

// function to find all the books ..
async  findAllBooks() : Promise<Books[]> {
const getAllBooks = await this.bookModel.find();
    return getAllBooks;
    
}
// function to save  the book ..
async saveTheBook(books : Books) : Promise<Books> {
    const saveBook = await this.bookModel.create(books);
    console.log(saveBook);
    return saveBook;
}
// function to find the book by id ..
async findTheBookById(id : string) : Promise<Books> {
    const getBook = await this.bookModel.findById(id);
    if(!getBook) {
    throw new NotFoundException('Book Not Found !!');
    }
    return getBook;

}
// function to update the book by id ..
async updateTheBookById(id : string, books : Books) : Promise<Books> {
    const getBook = await this.bookModel.findByIdAndUpdate(id,books ,{
        new : true
    });
    if(!getBook)
    throw new NotFoundException('Book Not Updated !!');
    return getBook;

}
}