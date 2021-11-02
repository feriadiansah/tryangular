import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TanamanListComponent } from './tanaman-list.component';

describe('TanamanListComponent', () => {
  let component: TanamanListComponent;
  let fixture: ComponentFixture<TanamanListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TanamanListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TanamanListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
