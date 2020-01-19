import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListaComponent } from './pessoa/pessoa-lista/pessoa-lista.component';
import { PessoaNovoComponent } from './pessoa/pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa/pessoa-editar/pessoa-editar.component';
import { PessoaDeletarComponent } from './pessoa/pessoa-deletar/pessoa-deletar.component';

@NgModule({
  declarations: [
    AppComponent,
    PessoaNovoComponent,
    PessoaEditarComponent,
    PessoaListaComponent,
    PessoaDeletarComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
