import { AddAutorComponent } from './../../components/add-autor/add-autor.component';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LivrosService } from '../../services/livros.service';
import { Livro } from '../../models/livro';
import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { catchError, Observable, of, tap } from 'rxjs';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss'],
})
export class LivrosComponent implements OnInit{


  @Output() edit = new EventEmitter();
  livros: Livro [] =[];
  dataSource = new MatTableDataSource(this.livros);




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
    this.livrosService.list().subscribe(livros =>this.dataSource = new MatTableDataSource(livros) )


  }
  ngAfterViewInit(): void {

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

  openDialog(_id : any){
    this.dialog.open(AddAutorComponent,{
      data:{
       livroId: _id

      }
    });

  }

  applyFilter(event: Event) {

    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();


  }

}
