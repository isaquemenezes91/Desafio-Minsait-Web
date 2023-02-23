import { AddAutorComponent } from './../../components/add-autor/add-autor.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../models/livro';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { catchError, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit {


  @Output() edit = new EventEmitter();
  livros: Observable<Livro[]>;

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






  constructor(private livrosService: LivrosService, private router: Router, private formBuilder:FormBuilder,public dialog: MatDialog) {
    this.livros = this.livrosService.list().pipe(
      catchError((error) => {
        return of([]);
      })

    );


  }

  ngOnInit(): void {


  }

  onAdd() {
    this.router.navigate(['livros/cadastro']);
  }

  onDelete(id: number) {
    this.livrosService.delete(id).subscribe(() => location.reload());
  }

  onEdit(id: number) {
    this.router.navigate([`livros/editar/${id}`]);
  }

  openDialog(){
    this.dialog.open(AddAutorComponent,{
      data:{
        id: 1
      }
    });

  }


}
