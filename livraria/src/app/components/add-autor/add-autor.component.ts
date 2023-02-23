import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-autor',
  templateUrl: './add-autor.component.html',
  styleUrls: ['./add-autor.component.scss']
})
export class AddAutorComponent {
  formAutor: FormGroup;

  @Input()id!: number;

  constructor (private formBuilder: FormBuilder,private router: Router){

    this.formAutor = this.formBuilder.group({
      id:'',
      nome: ['', [Validators.required]]
  });
}

Salvar(){
  this.router.navigate(['']);
}
}
