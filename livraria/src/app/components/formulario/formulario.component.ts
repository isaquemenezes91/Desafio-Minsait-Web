import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';

import { LivroDto } from '../../models/livroDto';
import { LivrosService } from 'src/app/services/livros.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  form: FormGroup;

  livroDto: LivroDto = {
    id:'',
    titulo: '',
    subtitulo: '',
    resumo: '',
    quantidadePaginas: 10000,
    dataPublicacao: '',
    edicao: 20,
    quantidadeEstoque: 1000,
    editora: '',
    autores: [
      {
        nome: '',
      },
    ],
  };

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private service: LivrosService,
    private location: Location,
    private snackBar: MatSnackBar,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id:'',
      titulo: ['', [Validators.required]],
      subtitulo: [''],
      resumo: [''],
      quantidadePaginas: [1, [Validators.required]],
      dataPublicacao: ['', [Validators.required]],
      edicao: [1],
      editora: ['', [Validators.required]],
      autores: ['', [Validators.required]],
      quantidadeEstoque: [1, [Validators.required]],
    });
  }

  ngOnInit(): void {
    const livro:LivroDto =this.route.snapshot.data['livro'];

    this.form.setValue({
      id: livro.id,
      titulo: livro.titulo,
      subtitulo: livro.subtitulo,
      resumo: livro.resumo,
      quantidadePaginas: livro.quantidadePaginas,
      dataPublicacao: livro.dataPublicacao,
      edicao: livro.edicao,
      editora: livro.editora,
      autores: '',
      quantidadeEstoque:livro.quantidadeEstoque
    })

    console.log(livro.id)
  }


  onSubmit() {
    this.livroDto.id = this.form.value.id;
    this.livroDto.titulo = this.form.value.titulo;
    this.livroDto.subtitulo = this.form.value.subtitulo;
    this.livroDto.resumo = this.form.value.resumo;
    this.livroDto.autores[0].nome = this.form.value.autores;
    this.livroDto.edicao = this.form.value.edicao;
    this.livroDto.dataPublicacao = this.form.value.dataPublicacao;
    this.livroDto.quantidadeEstoque = this.form.value.quantidadeEstoque;
    this.livroDto.quantidadePaginas = this.form.value.quantidadePaginas;
    this.livroDto.editora = this.form.value.editora;

    this.service
      .save(this.livroDto)
      .subscribe(()=>this.onSuccess());


  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Livro salvo com sucesso!', '', { duration: 5000 });
    this.onCancel();
  }

}
