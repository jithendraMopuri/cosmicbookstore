import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { HomeComponent } from './home/home.component';
import { MaterialExampleModule } from '../material.module';
import { CreateUpdateBookComponent } from './create-update-book/create-update-book.component';
import { ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { bookReducer } from './store/books.reducer';

@NgModule({
  declarations: [HomeComponent, CreateUpdateBookComponent],
  imports: [CommonModule, 
    BooksRoutingModule, 
    MaterialExampleModule,
    ReactiveFormsModule,StoreModule.forFeature("mybooks",bookReducer)
  ],
})
export class BooksModule {}
