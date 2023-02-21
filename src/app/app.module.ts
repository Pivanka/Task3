import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BookListModule } from './components/book-list/book-list.module';
import {MatDialogModule} from '@angular/material/dialog';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { BooksPageModule } from './components/books-page/books-page.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ViewBookComponent } from './components/view-book/view-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BooksPageModule,
    MatDialogModule,
    HttpClientModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
