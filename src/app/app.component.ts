import { Component } from '@angular/core';
import { Book } from '../book';
import { BOOKS } from '../mock-books';

@Component({
  selector: 'books-list',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	booksList:Book[] = BOOKS;
	selectedBook:Book;

	getBookDetails(isbn:number){
		this.selectedBook =this.booksList.filter(book=>book.isbn === isbn)[0];
	}
}
