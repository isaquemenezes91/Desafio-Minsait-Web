import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

import { LivroDto } from '../../models/livroDto';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent {
  form: FormGroup;

  livroDto: LivroDto = {
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
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      titulo: ['', [Validators.required]],
      subtitulo: [''],
      resumo: [''],
      quantidadePaginas: [1, [Validators.required]],
      dataPublicacao: ['', [Validators.required]],
      edicao: [1],
      editora: ['', [Validators.required]],
      autores: ['', [Validators.required]],
      quantidadeEstoque: [0, [Validators.required]],
    });
  }

  onSubmit() {
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
      .subscribe(() => this.router.navigate(['']));
  }

  onCancel() {
    this.location.back();
  }
}
