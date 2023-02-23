
import { EditarLivroComponent } from './editar-livro/editar-livro.component';
import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosComponent } from './livros/livros.component';
import { LivrosResolver } from './guards/livros.resolver';

const routes: Routes = [
  {path:'',component: LivrosComponent},
  {path:'cadastro',component: CadastroLivroComponent,resolve:{livro:LivrosResolver} },
  {path:'editar/:id',component: EditarLivroComponent, resolve:{livro:LivrosResolver}}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
