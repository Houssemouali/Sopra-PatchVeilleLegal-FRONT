import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonnéesComponent } from './Données.component';

describe('DonnéesComponent', () => {
  let component: DonnéesComponent;
  let fixture: ComponentFixture<DonnéesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonnéesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonnéesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
