import { CadastroLivroComponent } from './cadastro-livro/cadastro-livro.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
  {path:'',component: LivrosComponent},
  {path:'cadastro',component: CadastroLivroComponent},
  {path:'editar/:id',component: CadastroLivroComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LivrosRoutingModule { }
