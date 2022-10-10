import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemService } from '../../shared/services/item.service';

import { ItemRes } from '../../../../shared/models/ItemResponse.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail-products',
  templateUrl: './detail-products.component.html',
  styleUrls: ['./detail-products.component.sass']
})
export class DetailProductsComponent implements OnInit {

  public item!: ItemRes;
  public listCategories: string[] = [];
  public isFound: boolean = true;
  public error: any;

  constructor(
    private route: ActivatedRoute,
    private itemService: ItemService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: any) => {
      this.itemService.getItemById(params.id).subscribe(this.getItem, this.getError);
    })
  }

  public getItem = (resp: ItemRes) => {
    this.item = resp;
    this.listCategories = resp.categories;
  }

  public getError = (error: any) => {
    
    this.isFound = false;
    this.error = error;
  }

}
