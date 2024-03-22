import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDommageComponent } from './detail-dommage.component';

describe('DetailDommageComponent', () => {
  let component: DetailDommageComponent;
  let fixture: ComponentFixture<DetailDommageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDommageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailDommageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
