import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProductsComponent } from './components/detail-products/detail-products.component';
import { ListProductsComponent } from './components/list-products/list-products.component';
import { CoreModule } from '../../core/core.module';




@NgModule({
  declarations: [
    ListProductsComponent,
    DetailProductsComponent
  ],
  imports: [
    CommonModule,
    CoreModule
  ],
  exports: [
    ListProductsComponent, DetailProductsComponent
  ]
})
export class ProductsModule { }
