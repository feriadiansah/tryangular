import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanamanEditComponent } from './tanaman-edit.component';

describe('TanamanEditComponent', () => {
  let component: TanamanEditComponent;
  let fixture: ComponentFixture<TanamanEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanamanEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanamanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
