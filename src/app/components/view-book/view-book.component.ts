import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book, BookDetails } from 'src/app/models/book.models';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-view-book',
  templateUrl: './view-book.component.html',
  styleUrls: ['./view-book.component.scss']
})
export class ViewBookComponent implements OnInit {
  book!: BookDetails;
  constructor(@Inject(MAT_DIALOG_DATA) public data: number,
  private bookService: BookService) { }

  ngOnInit() {
    this.bookService.getBookDetails(this.data).subscribe(
      res => { this.book = res }
    );
  }

}
