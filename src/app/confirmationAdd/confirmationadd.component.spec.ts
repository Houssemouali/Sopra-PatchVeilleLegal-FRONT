import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationAddComponent } from './confirmationadd.component';

describe('ConfirmationComponent', () => {
  let component: ConfirmationAddComponent;
  let fixture: ComponentFixture<ConfirmationAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmationAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
