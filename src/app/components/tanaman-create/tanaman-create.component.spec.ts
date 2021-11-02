import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanamanCreateComponent } from './tanaman-create.component';

describe('TanamanCreateComponent', () => {
  let component: TanamanCreateComponent;
  let fixture: ComponentFixture<TanamanCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanamanCreateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanamanCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
