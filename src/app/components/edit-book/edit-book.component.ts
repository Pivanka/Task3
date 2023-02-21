import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddBook } from 'src/app/models/book.models';
import { BookService } from 'src/app/services/book.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.scss']
})
export class EditBookComponent implements OnInit {
  editForm!: FormGroup;
  title!: FormControl;
  cover!: FormControl;
  genre!: FormControl;
  author!: FormControl;
  content!: FormControl;
  book!: AddBook;
  isEdit: boolean = false;

  constructor(private router: Router,
    private bookService: BookService,
    private activatedRoute: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(
      parameterMap => {
        const id = parameterMap.get('id');
        this.createFrom(id as unknown as number);
      }
    )
  }

  createFrom(id: number){
    if(id === null) {
      this.isEdit = false;
      this.createFormControls();
      this.createForm();
    }
    else {
      this.isEdit = true;
      this.bookService.getBookDetails(id).subscribe(
        res => {
          this.book = res;
          this.createValuesFormControls();
          this.createForm();
        }
      )
    }
  }

  createFormControls(){
    this.title = new FormControl('', Validators.required);
    this.cover = new FormControl('', Validators.required);
    this.genre = new FormControl('', Validators.required);
    this.author = new FormControl('', Validators.required);
    this.content = new FormControl('', Validators.required);
  }

  createValuesFormControls(){
    this.title = new FormControl(this.book.title, Validators.required);
    this.cover = new FormControl(this.book.cover, Validators.required);
    this.genre = new FormControl(this.book.genre, Validators.required);
    this.author = new FormControl(this.book.author, Validators.required);
    this.content = new FormControl(this.book.content, Validators.required);
  }

  createForm() {
    this.editForm = new FormGroup({
        title: this.title,
        cover: this.cover,
        genre: this.genre,
        author: this.author,
        content: this.content
    });
  }

  add()
  {
    if(this.editForm.valid)
    {
      const book: AddBook = {
        id: this.book?.id,
        title: this.title.value,
        cover: this.cover.value,
        author: this.author.value,
        content: this.content.value,
        genre: this.genre.value
      }
      this.bookService.addBook(book).toPromise();
      this.router.navigate([''])
    }
  }

  clear()
  {
    this.editForm.reset();
  }

  back(){
    this.location.back();
  }

  getClass(control: FormControl)
  {
    if(control.invalid && (control.dirty || control.touched))
    {
      return 'form-control error';
    }
    else{
      return 'form-control';
    }
  }
}
