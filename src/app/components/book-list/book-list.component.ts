import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.models';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {
  books!: Array<Book>;
  constructor(private bookService: BookService,
    private router: Router) { }

  ngOnInit() {
    if(this.router.url === '/recommended')
    {
      this.bookService.getRecommendedBooks().subscribe(
        res => { this.books = res}
      )
    }
    else
    {
      this.bookService.getAllBooks().subscribe(
        res => { this.books = res}
      )
    }
  }

}
