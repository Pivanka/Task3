import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookListComponent } from './book-list.component';
import { BookListItemComponent } from '../book-list-item/book-list-item.component';
import { AppRoutingModule } from 'src/app/app-routing.module';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  declarations:
  [
    BookListComponent,
    BookListItemComponent
  ],
  exports:
  [
    BookListComponent
  ]
})
export class BookListModule { }
