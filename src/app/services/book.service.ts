import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AddBook, Book, BookDetails } from '../models/book.models';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  baseUrl: string = "https://localhost:7019/";
  constructor(private http: HttpClient) { }

  getAllBooks(): Observable<Array<Book>>{
    const url: string = this.baseUrl + 'api/books';
    return this.http.get<Array<Book>>(url);
  }

  getRecommendedBooks(): Observable<Array<Book>>{
    const url: string = this.baseUrl + 'api/recommended';
    return this.http.get<Array<Book>>(url);
  }

  getBookDetails(id: number): Observable<BookDetails>{
    const url: string = this.baseUrl + 'api/books/' + id;
    return this.http.get<BookDetails>(url);
  }

  addBook(body: AddBook): Observable<number>{
    const url: string = this.baseUrl + 'api/books/save';
    return this.http.post<number>(url, body);
  }
}
