import { Livro } from './../models/livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = "https://localhost:7266/v1/api/Livro";


  constructor(private httpClient: HttpClient) { }

  list(){

    return this.httpClient.get<Livro[]>(this.API)
    .pipe(
      first(),
      tap(livros => console.log(livros))
    );

  }
}
