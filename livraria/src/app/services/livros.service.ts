
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

  save(livro: Partial<LivroDto>){
    if (livro.id){
      return this.update(livro);


    }
    return this.create(livro);

  }

  delete(id:number){
    return this.httpClient.delete(`${this.API}/${id}`).pipe(first());
  }

  loadById(id: string) {
    return this.httpClient.get<Livro>(`${this.API}/${id}`);
  }


  create(livro: Partial<LivroDto>){

    return this.httpClient.post(this.API, livro);

  }
  update(livro: Partial<LivroDto>){

    return this.httpClient.put(`${this.API}/${livro.id}`,livro);

  }

  filter(){
    return '';
  }

}
