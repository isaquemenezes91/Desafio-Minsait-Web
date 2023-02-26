
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AddAutorComponent } from '../components/add-autor/add-autor.component';

import { FormularioComponent } from './../components/formulario/formulario.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { EditarLivroComponent } from './editar-livro/editar-livro.component';
import { LivrosRoutingModule } from './livros-routing.module';
import { LivrosComponent } from './livros/livros.component';


@NgModule({
    declarations: [
        LivrosComponent,
        CadastroLivroComponent,
        FormularioComponent,
        EditarLivroComponent,
        AddAutorComponent
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
        MatDatepickerModule,
        MatNativeDateModule,
        MatDividerModule,
        MatSnackBarModule,
        MatDialogModule

    ]
})
export class LivrosModule { }
