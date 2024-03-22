import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoixReparateurComponent } from './choix-reparateur.component';

describe('ChoixReparateurComponent', () => {
  let component: ChoixReparateurComponent;
  let fixture: ComponentFixture<ChoixReparateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoixReparateurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChoixReparateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
