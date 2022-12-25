import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { v4 as uuidv4 } from 'uuid';
import { Book } from '../store/books';
import { BooksActions } from '../store/books.action';
@Component({
  selector: 'cosmicbook-create-update-book',
  templateUrl: './create-update-book.component.html',
  styleUrls: ['./create-update-book.component.scss'],
})
export class CreateUpdateBookComponent implements OnInit{
  createUpdateForm: FormGroup = this.formBuilder.group({
    name:['',Validators.required],
    imageurl:['',Validators.required],
    date:['', Validators.required],
    excerpt:[''],
    written:['',Validators.required],
    publisher:[''],
    genere:['']
  });
  public navigatePath;
  startDate = new Date(1990, 0, 1);
  public writers: string[] = ['J.K. Rowling', 'Amy Tan', 'Tana French', 'George R.R Martin', 'Atul Gawande'];
  public publishers : string[] = ['Arihant Books','Jaico Publishing House','Rupa Publications','Roli Books'];
  constructor(private formBuilder:FormBuilder, 
    private router:Router , 
    private store: Store ,
    private activatedRoute : ActivatedRoute){
    this.navigatePath = this.activatedRoute?.snapshot?.routeConfig?.path;
  }

  CreateBook() {
    let payload:Book = {
      id : '',
      name : '',
      imageURL : '',
      publicationDate : '',
      genere : '',
      excerpt : '',
      writtenBy: [],
      publisher:''
    };
    payload.id = this.navigatePath === 'create' ? uuidv4() : history.state.id;
    payload.name = this.createUpdateForm.value.name;
    payload.imageURL = this.createUpdateForm.value.imageurl;
    payload.publicationDate = new Date(this.createUpdateForm.value.date).toString();
    payload.excerpt = this.createUpdateForm.value.excerpt;
    payload.writtenBy = this.createUpdateForm.value.written;
    payload.publisher = this.createUpdateForm.value.publisher;
    payload.genere = this.createUpdateForm.value.genere;
    this.navigatePath === 'create' ? this.store.dispatch(BooksActions.addBook({ newBook : payload})) : this.store.dispatch(BooksActions.updateBook({ updateBook : payload}));
    this.router.navigate(['/home']);
  }
  ngOnInit(): void {
    if(this.navigatePath && this.navigatePath !== 'create') {
      this.createUpdateForm.patchValue({
        name : history.state.name,
        imageurl : history.state.imageURL,
        date: new Date(history.state.publicationDate),
        excerpt:history.state.excerpt,
        written: history.state.writtenBy,
        publisher: history.state.publisher,
        genere : history.state.genere
      })
    }
  }
}
