import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ProductsService } from '../../../services/products.service';
import { ProductListComponent } from './product-list.component';

describe('ProductListComponent', () => {
  let component: ProductListComponent;
  let fixture: ComponentFixture<ProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [ProductsService],
      declarations: [ ProductListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  // it('should have a productsDetails method',
  // inject([ProductsService], (service: ProductsService) => {
  //   const apiUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
  //   component.productsDetails();
  //   service.getService(apiUrl).subscribe(res => {
  //      expect(res).toEqual('');
  //   });
  // }));

  it('should have a overlayProduct method for identify selectProductName and images', () => {
    component.overlayProduct(['https://assets.weimgs.com/weimgs/rk/images/wcm/products/202041/0181/cozy-weave-pillow-cover-throw-set-stone-white-m.jpg'], 'product1')
    expect(component.selectProductName).toEqual('product1');
    expect(component.productImages).toEqual(['https://assets.weimgs.com/weimgs/rk/images/wcm/products/202041/0181/cozy-weave-pillow-cover-throw-set-stone-white-m.jpg']);
  });
});
