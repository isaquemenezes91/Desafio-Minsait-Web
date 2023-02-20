import { LivrosService } from './../services/livros.service';
import { Livro } from './../models/livro';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  displayedColumns = ['titulo',"subtitulo",'edicao','resumo', 'autor','dataPublicacao', 'editora','quantidadePaginas','quantidadeEstoque'];

  livros: Observable<Livro[]>;




  constructor(private livrosService:LivrosService ){

    this.livros = this.livrosService.list();


  }

  ngOnInit(): void{

  }

}
