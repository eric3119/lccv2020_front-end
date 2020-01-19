import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { PessoasComponent } from './pessoas/pessoas.component';
import { PessoaDeletarComponent } from './pessoa-deletar/pessoa-deletar.component';
import { PessoaNovoComponent } from './pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa-editar/pessoa-editar.component';


const routes: Routes = [
{
  path: 'pessoas',
  component: PessoasComponent,
  data: { title: 'Lista de Pessoas' }
},
{
  path: 'pessoa-deletar/:id',
  component: PessoaDeletarComponent,
  data: { title: 'Deletar Pessoa' }
},
{
  path: 'pessoa-novo',
  component: PessoaNovoComponent,
  data: { title: 'Adicionar Pessoa' }
},
{
  path: 'pessoa-editar/:id',
  component: PessoaEditarComponent,
  data: { title: 'Editar Pessoa' }
},
{ path: '',
  redirectTo: '/pessoas',
  pathMatch: 'full'
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    FormsModule,
    BrowserModule,
    HttpClientModule
  ], exports: [RouterModule]
})
export class AppRoutingModule { }
