import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
import { Pessoa } from 'src/model/pessoa';

@Component({
  selector: 'app-pessoa-deletar',
  templateUrl: './pessoa-deletar.component.html',
  styleUrls: ['./pessoa-deletar.component.css']
})
export class PessoaDeletarComponent implements OnInit {

  pessoa: Pessoa;

  isLoadingResults = false;
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService) { }

  ngOnInit() {
    this.isLoadingResults = true;
    this.getPessoa(this.route.snapshot.params['id']);    
 }

  getPessoa(id) {
    this.api.getPessoa(id).subscribe(data => {
      this.pessoa = data; // TODO .toFixed(2)
      
      this.isLoadingResults = false;
    });
  }
  
  goBack(){
    this.router.navigate(['/']);
  }

  deletePessoa() {
    this.api.deletePessoa(this.pessoa.id)
      .subscribe(res => {
          this.goBack();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
