
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../models/livro';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit {

  @Output() edit = new EventEmitter();

  displayedColumns = [
    'titulo',
    'subtitulo',
    'edicao',
    'resumo',
    'autor',
    'dataPublicacao',
    'editora',
    'quantidadePaginas',
    'quantidadeEstoque',
    'actions',
  ];

  livros: Observable<Livro[]>;

  constructor(private livrosService: LivrosService, private router: Router) {
    this.livros = this.livrosService.list().pipe(
      catchError((error) => {
        return of([]);
      })
    );
  }

  ngOnInit(): void {}

  onAdd() {
    this.router.navigate(['livros/cadastro']);
  }

  onDelete(id: number) {
    this.livrosService.delete(id).subscribe(()=> location.reload());

  }

  onEdit(id:number){
    this.router.navigate([`livros/editar/${id}`]);
  }

}
