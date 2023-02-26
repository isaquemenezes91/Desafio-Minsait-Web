
import { Livro } from '../models/livro';
import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { LivrosService } from 'src/app/services/livros.service';

@Injectable({
  providedIn: 'root',
})
export class LivrosResolver implements Resolve<Livro> {
  constructor(private service: LivrosService) { }


  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Livro> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({
      id: 0,
      titulo: '',
      subtitulo: '',
      resumo: '',
      quantidadePaginas: 0,
      dataPublicacao: '',
      edicao: 0,
      editora: '',
      autores: '',
      quantidadeEstoque: 0,
    });
  }
}
