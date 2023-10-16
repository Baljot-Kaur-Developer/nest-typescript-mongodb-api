import { Controller } from '@nestjs/common';
import { Body, Get, Post, Param, Put } from '@nestjs/common/decorators';

import { BooksService } from './books.service';
import { SaveBook } from './dto/save-book.dto';
import { Books } from './schemas/books.schema';

@Controller('allbooks')

export class BooksController {
// constructor injection for service
constructor ( private bookService : BooksService ) {}

// function to get all books
@Get()
async getAllBooks() : Promise<Books[]> {
const getBooks = await this.bookService.findAllBooks();
return getBooks;
}
// function to save the book .. 
@Post('save')
async saveTheBook( 
    @Body()
books : SaveBook) : Promise<Books> {
    return this.bookService.saveTheBook(books);
}
// function to find the book by id ..
@Get(':id')
async getTheBookById(@Param('id')
id : string) : Promise<Books> {
    return this.bookService.findTheBookById(id);
}
// function to update the book by id .
@Put(':id')
async updateTheBookById(@Param('id')
id : string , @Body() books : SaveBook) : Promise<Books> {
    return this.bookService.updateTheBookById(id, books);
}
}
