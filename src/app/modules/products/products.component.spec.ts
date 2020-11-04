import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ProductsComponent } from './products.component';
import { JoinProductComponent } from './join-product/join-product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../../services/products.service';

describe('ProductsComponent', () => {

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [
        ProductsComponent,
        JoinProductComponent,
        ProductListComponent
      ],
      providers : [
        ProductsService
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
      ]
    }).compileComponents();
  });

  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
