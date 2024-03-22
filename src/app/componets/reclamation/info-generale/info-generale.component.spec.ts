import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoGeneraleComponent } from './info-generale.component';

describe('InfoGeneraleComponent', () => {
  let component: InfoGeneraleComponent;
  let fixture: ComponentFixture<InfoGeneraleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoGeneraleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoGeneraleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
