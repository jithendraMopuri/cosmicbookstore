import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
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
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'name', 'publisher', 'genere', 'writtenby', 'imageUrl', 'edit', 'delete'];
  dataSource = new MatTableDataSource<Book>;
  @ViewChild(MatPaginator) paginator: any;
  constructor(private router: Router, private store: Store) {

  }
  books$ = this.store.pipe(select(selectBooks));
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

  ngOnInit() {
    this.books$.subscribe((res => {console.log(res)
  }));
  }
}

