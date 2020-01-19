import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { TpVinculo } from 'src/model/tpvinculo';


@Component({
  selector: 'app-pessoa-novo',
  templateUrl: './pessoa-novo.component.html',
  styleUrls: ['./pessoa-novo.component.css']
})
export class PessoaNovoComponent implements OnInit {

  pessoaForm: FormGroup;
  isLoadingResults = false;
  vinculos: TpVinculo[];
  
  constructor(private router: Router, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {

    this.loadTpVinculos()

    this.pessoaForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'cpf': [null, Validators.required],
      'data_nascimento': [null, Validators.required],
      'salario': [null, Validators.required],
      'email': [null, Validators.required],
      'ativo': [null, Validators.required],
      'id_tp_vinculo': [null, Validators.required]
    });
  }

  loadTpVinculos(){
    this.api.getTpVinculos()
        .subscribe(res => {
          this.vinculos = res;
        }, err => {
          console.log(err);
        });
  }

  addPessoa(form: NgForm) {
    this.isLoadingResults = true;
    this.api.addPessoa(form)
      .subscribe(res => {
          // const id = res['_id'];
          this.isLoadingResults = false;
          this.goBack();
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        });
  }

  goBack(){
    this.router.navigate(['/']);
  }

}
