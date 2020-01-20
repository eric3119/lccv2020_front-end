import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoaListaComponent } from './pessoa/pessoa-lista/pessoa-lista.component';
import { PessoaNovoComponent } from './pessoa/pessoa-novo/pessoa-novo.component';
import { PessoaEditarComponent } from './pessoa/pessoa-editar/pessoa-editar.component';
import { PessoaDeletarComponent } from './pessoa/pessoa-deletar/pessoa-deletar.component';

import { ConfirmationDialogComponent } from './pessoa/confirmation-dialog/confirmation-dialog.component';
import { ConfirmationDialogService } from './pessoa/confirmation-dialog/confirmation-dialog.service';

@NgModule({
  declarations: [
    AppComponent,
    PessoaNovoComponent,
    PessoaEditarComponent,
    PessoaListaComponent,
    PessoaDeletarComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    NgbModule,
    FontAwesomeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
  ],
  providers: [ConfirmationDialogService],
  bootstrap: [AppComponent],
  entryComponents: [ ConfirmationDialogComponent ]
})
export class AppModule { }
