import { NgModule } from '@angular/core';
import {  RouterModule, Routes } from '@angular/router';


export const appRoutes: Routes = [
    {
        path:'',
        loadChildren:() => import('./books/books.module').then(b => b.BooksModule)
    },
];


@NgModule({

    imports: [RouterModule.forRoot(appRoutes)],

    exports: [RouterModule]
})

export class AppRoutingModule { }