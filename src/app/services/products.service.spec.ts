import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { ProductsService } from './products.service';

describe('ProductsService', () => {
  let httpTestingController: HttpTestingController;
  let service: ProductsService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    httpTestingController = TestBed.get(HttpTestingController);
    service = TestBed.get(ProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  // it('should have a getService method',
  // inject([ProductsService], (service: ProductsService) => {
  //   const apiUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
  //   service.getService(apiUrl).subscribe((response) => {
  //     expect(response).toEqual('');
  //   });
  // }));

  it('throws 404 error', () => {
    const apiUrl = 'https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json';
    service.getService(apiUrl).subscribe(
      data => fail('Should have failed with 404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toContain('404 error');
      }
    );
    const req = httpTestingController.expectOne('https://www.westelm.com/services/catalog/v4/category/shop/new/all-new/index.json');
    // Respond with mock error
    req.flush('404 error', { status: 404, statusText: 'Not Found' });
  });
});
