import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { JoinProductComponent } from './join-product/join-product.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({

  declarations: [
    ProductsComponent,
    JoinProductComponent,
    ProductListComponent
  ],
  imports: [CommonModule],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsModule { }
