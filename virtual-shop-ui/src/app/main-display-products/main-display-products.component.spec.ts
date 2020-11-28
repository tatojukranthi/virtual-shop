import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainDisplayProductsComponent } from './main-display-products.component';

describe('MainDisplayProductsComponent', () => {
  let component: MainDisplayProductsComponent;
  let fixture: ComponentFixture<MainDisplayProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainDisplayProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainDisplayProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
