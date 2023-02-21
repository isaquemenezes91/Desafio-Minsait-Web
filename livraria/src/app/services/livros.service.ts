
import { LivroDto } from '../models/livroDto';
import { Livro } from '../models/livro';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { first, tap, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LivrosService {

  private readonly API = "https://localhost:7266/v1/api/Livro";



  constructor(private httpClient: HttpClient ) { }

  list(){

    return this.httpClient.get<Livro[]>(this.API)
    .pipe(
      first(),
      tap(livros => console.log(livros))
    );

  }

  save(livro: LivroDto){
    return this.httpClient.post(this.API, livro);
  }

  delete(id:number){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }


}
