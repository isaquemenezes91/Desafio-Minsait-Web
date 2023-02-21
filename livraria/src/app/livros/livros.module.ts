import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/livros.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LivrosComponent,
    CadastroLivroComponent
  ],
  imports: [
    CommonModule,
    LivrosRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule,

  ]
})
export class LivrosModule { }
