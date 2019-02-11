import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from '../models/book.model';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  url = 'http://localhost:8089/books';
  books: Book[];
  constructor(private httpClient:HttpClient) { 
    httpClient.get(this.url).subscribe(
      (data: Book[])=>{
        this.books = data;
      });
}

  ngOnInit() {
  }


}
