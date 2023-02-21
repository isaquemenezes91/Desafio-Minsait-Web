import { LivrosService } from './../services/livros.service';
import { Livro } from './../models/livro';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-livros',
  templateUrl: './livros.component.html',
  styleUrls: ['./livros.component.scss']
})
export class LivrosComponent implements OnInit {

  displayedColumns = ['titulo',"subtitulo",'edicao','resumo', 'autor','dataPublicacao', 'editora','quantidadePaginas','quantidadeEstoque','actions'];

  livros: Observable<Livro[]>;




  constructor(private livrosService:LivrosService, private router:Router ){

    this.livros = this.livrosService.list();


  }

  ngOnInit(): void{

  }

  onAdd(){

    this.router.navigate(['livros/cadastro']);

  }

}
