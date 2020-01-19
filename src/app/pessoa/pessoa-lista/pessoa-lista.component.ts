import { Component, OnInit } from '@angular/core';

import { ApiService } from 'src/app/api.service';
import { TpVinculo } from 'src/model/tpvinculo';

@Component({
  selector: 'app-pessoa-lista',
  templateUrl: './pessoa-lista.component.html',
  styleUrls: ['./pessoa-lista.component.css']
})
export class PessoaListaComponent implements OnInit {

  dataSource;
  vinculos: TpVinculo[];
  isLoadingResults = false;

  constructor(private _api: ApiService) { }

  ngOnInit() {

    this.isLoadingResults = true;
    
    this.loadPessoas();
  }
  
  loadPessoas(){
    this._api.getPessoas()
    .subscribe(res => {
      this.dataSource = res;
      this.loadTpVinculos();
    }, err => {
      console.log(err);
    });
  }

  loadTpVinculos(){
    this._api.getTpVinculos()
        .subscribe(res => {
          this.vinculos = res;
          this.mapVinculos();
        }, err => {
          console.log(err);
        });
  }

  mapVinculos(){
    this.dataSource = this.dataSource.map(pessoa => {
      console.log(this.vinculos.find(vinculo => {return vinculo.id === pessoa.id_tp_vinculo}))
      return {
        id: pessoa.id,
        nome: pessoa.nome,
        cpf: pessoa.cpf,
        data_nascimento: pessoa.data_nascimento,
        salario: pessoa.salario.toFixed(2),
        email: pessoa.email,
        ativo: pessoa.ativo,
        id_tp_vinculo: pessoa.id_tp_vinculo,
        tp_vinculo: this.vinculos.find(vinculo => vinculo.id === pessoa.id_tp_vinculo).tp_vinculo
      }
    });

    this.isLoadingResults = false;
  }
}
