

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListProductsComponent } from '../products/components/list-products/list-products.component';
import { DetailProductsComponent } from '../products/components/detail-products/detail-products.component';



const routes: Routes = [ 
    {
        path: 'items',
        component: ListProductsComponent,
        data: {
            search: 'audifonos'
        }
    },
    {
        path: 'items/:id',
        component: DetailProductsComponent
    }
]



@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeRoutingModule { }
