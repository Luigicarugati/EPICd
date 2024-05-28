import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Brand1Component } from './brand1.component';

describe('Brand1Component', () => {
  let component: Brand1Component;
  let fixture: ComponentFixture<Brand1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Brand1Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Brand1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
