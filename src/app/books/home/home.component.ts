import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Book } from '../store/books';
import { BooksActions } from '../store/books.action';

import { selectBooks } from '../store/books.selector';

@Component({
  selector: 'cosmicbook-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements AfterViewInit, OnInit {
  public ELEMENT_DATA:Book[] =[];
  displayedColumns: string[] = ['id', 'name', 'publicationDate', 'genere', 'writtenby','publisher', 'imageUrl', 'edit', 'delete'];
  books$ = this.store.select(selectBooks);
  dataSource = new MatTableDataSource<Book>([]);
  @ViewChild(MatPaginator) paginator: any;
  constructor(private router: Router, private store: Store) {
    
  }
  
  ngOnInit() {
    this.books$.subscribe((books => {
      this.dataSource.data = books;
    }));

  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    
  }

  edit(record: any) {
    this.router.navigateByUrl(`/edit/${record.id}`, { state: record });
  }
  delete(id: string) {
    this.store.dispatch(BooksActions.removeBook({ bookId: id }));
  } 
  createRecord() {
    this.router.navigate(['/create']);
  }

}

