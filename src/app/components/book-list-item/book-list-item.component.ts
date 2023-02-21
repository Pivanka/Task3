import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Book } from 'src/app/models/book.models';
import { ViewBookComponent } from '../view-book/view-book.component';

@Component({
  selector: 'app-book-list-item',
  templateUrl: 'book-list-item.component.html',
  styleUrls: ['./book-list-item.component.scss']
})
export class BookListItemComponent implements OnInit {
  @Input() book!: Book;

  constructor(public dialog: MatDialog,
    private router: Router) { }

  ngOnInit() {
  }

  openDetails()
  {
    this.dialog.open(ViewBookComponent, {
      data: this.book.id
    })
  }

  editBook()
  {
    this.router.navigate(['/edit', this.book.id]);
  }
}
