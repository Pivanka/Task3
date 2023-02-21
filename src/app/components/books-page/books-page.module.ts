import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksPageComponent } from './books-page.component';
import { BookListModule } from '../book-list/book-list.module';
import { RouterModule } from '@angular/router';
import { EditBookComponent } from '../edit-book/edit-book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
      BooksPageComponent,
      EditBookComponent
    ],
    imports: [
      CommonModule,
      RouterModule,
      BookListModule,
      ReactiveFormsModule,
    ],
    exports:
    [
      BooksPageComponent,
      EditBookComponent
    ]
})
export class BooksPageModule { }
