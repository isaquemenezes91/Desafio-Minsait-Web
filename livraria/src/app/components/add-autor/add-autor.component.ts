
import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AutorAdd } from 'src/app/models/autorAdd';
import { LivrosService } from 'src/app/services/livros.service';

@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.scss'],
})
export class AddAutorComponent implements OnInit {
  formAutor: FormGroup;

  autor: AutorAdd ={

    livroId:this.data.livroId,
    nome:''
  }



  constructor(
    private service: LivrosService,
    private formBuilder: FormBuilder,
    private router: Router,
    public dialogRef: MatDialogRef<AddAutorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AutorAdd
  ) {

      this.formAutor = this.formBuilder.group({

        livroId: '',
        nome: ['', [Validators.required]],
      });

  }

  ngOnInit(): void {
    this.formAutor.setValue(
      {
      livroId: this.data.livroId,
      nome:''

    });
  }



  Salvar() {

    this.autor.livroId = this.formAutor.value.livroId;
    this.autor.nome= this.formAutor.value.nome;


    console.log(this.autor);

    this.service
      .addAutor(this.autor)
      .subscribe(() => location.reload());


  }
}
