import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllBooksComponent } from './components/all-books/all-books.component';
import { BookDetailsComponent } from './components/book-details/book-details.component';
import { BooksComponent } from './books.component';




@NgModule({
  declarations: [
    AllBooksComponent,
    BookDetailsComponent,
    BooksComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class BooksModule { }
