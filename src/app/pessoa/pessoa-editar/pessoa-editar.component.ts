import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { TpVinculo } from 'src/model/tpvinculo';

@Component({
  selector: 'app-pessoa-editar',
  templateUrl: './pessoa-editar.component.html',
  styleUrls: ['./pessoa-editar.component.css']
})
export class PessoaEditarComponent implements OnInit {

  pessoaForm: FormGroup;
  
  id: number;
  nome: string;
  cpf: string;
  data_nascimento: Date;
  salario: number;
  email: string;
  ativo: boolean;
  id_tp_vinculo: number;

  vinculos: TpVinculo[];
  
  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.isLoadingResults = true;
    this.getPessoa(this.route.snapshot.params['id']);
    this.pessoaForm = this.formBuilder.group({
      'nome': [null, Validators.required],
      'cpf': [null, Validators.required],
      'data_nascimento': [null, Validators.required],
      'salario': [null, Validators.required],
      'email': [null, Validators.required],
      'ativo': [null],
      'id_tp_vinculo': [null, Validators.required]
    });
 }

  getPessoa(id) {
    this.api.getPessoa(id).subscribe(data => {
      this.id = data.id;
      this.pessoaForm.setValue({
        nome: data.nome,
        cpf: data.cpf,
        data_nascimento: data.data_nascimento,
        salario: data.salario,
        email: data.email,
        ativo: data.ativo,
        id_tp_vinculo: data.id_tp_vinculo,
      });

      this.loadTpVinculos();
    });
  }

  loadTpVinculos(){
    this.api.getTpVinculos()
      .subscribe(res => {
        this.vinculos = res;
        this.isLoadingResults = false;
      }, err => {
        console.log(err);
      });
  }

  updatePessoa(form: NgForm) {
    this.isLoadingResults = true;
    this.api.updatePessoa(this.id, form)
      .subscribe(res => {
          this.isLoadingResults = false;
          this.goBack();
        }, (err) => {
          console.log(err);
          this.isLoadingResults = false;
        }
      );
  }

  goBack(){
    this.router.navigate(['/']);
  }
}
