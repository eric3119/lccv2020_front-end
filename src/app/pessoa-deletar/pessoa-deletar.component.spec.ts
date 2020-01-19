import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoaDeletarComponent } from './pessoa-deletar.component';

describe('PessoaDeletarComponent', () => {
  let component: PessoaDeletarComponent;
  let fixture: ComponentFixture<PessoaDeletarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoaDeletarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoaDeletarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
