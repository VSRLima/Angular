import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlunosFormsComponent } from './alunos-forms.component';

describe('AlunosFormsComponent', () => {
  let component: AlunosFormsComponent;
  let fixture: ComponentFixture<AlunosFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlunosFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlunosFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
