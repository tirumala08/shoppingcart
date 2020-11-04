import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinProductComponent } from './join-product.component';

describe('JoinProductComponent', () => {
  let component: JoinProductComponent;
  let fixture: ComponentFixture<JoinProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JoinProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JoinProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
