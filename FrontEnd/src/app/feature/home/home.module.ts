import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { CoreModule } from '../../core/core.module';
import { ProductsModule } from '../products/products.module';
import { HomeRoutingModule } from './home-routing.module';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CoreModule,
    HomeRoutingModule,
    ProductsModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }
