import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro-livro',
  templateUrl: './cadastro-livro.component.html',
  styleUrls: ['./cadastro-livro.component.scss']
})
export class CadastroLivroComponent implements OnInit{

  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form = this.formBuilder.group({
      titulo: ['',[Validators.required]],
      subtitulo:[''],
      resumo: [''],
      quantidadePaginas: ['',[Validators.required]],
      dataPublicaca0:['',[Validators.required]],
      edicao:[''],
      editora:['',[Validators.required]],
      autores: ['',[Validators.required]],
      quantidadeEstoque:['',[Validators.required]],
    });
  }

  ngOnInit(): void {

  }

}
