import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.scss']
})
export class BooksPageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  add(){
    this.router.navigate(['create']);
  }
}
