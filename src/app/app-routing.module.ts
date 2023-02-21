import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { EditBookComponent } from './components/edit-book/edit-book.component';
import { ViewBookComponent } from './components/view-book/view-book.component';

const routes: Routes = [
  {path: '', component: BookListComponent},
  {path: 'recommended', component: BookListComponent},
  {path: 'edit/:id', component: EditBookComponent},
  {path: 'create', component: EditBookComponent},
  {path: 'details', component: ViewBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
