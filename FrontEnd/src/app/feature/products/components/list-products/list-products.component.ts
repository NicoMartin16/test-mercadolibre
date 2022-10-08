import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from 'src/app/core/models/item.model';
import { ItemService } from 'src/app/feature/products/shared/services/item.service';


@Component({
  selector: 'app-list-products',
  templateUrl: './list-products.component.html',
  styleUrls: ['./list-products.component.sass']
})
export class ListProductsComponent implements OnInit {

  public listItems: Observable<Item[]> = new Observable<Item[]>();
  public listCategories: string[] = []


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private itemService: ItemService) { }
  

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      this.listItems = this.itemService.getItemsByTerm(params.search);
      this.itemService.getCategories(params.search).subscribe(this.getCategories);
    })
  }

  navigateDetail(item: Item) {
    this.router.navigate(['/items', item.id])
  }

  getCategories = (resp: string[]) => {
    this.listCategories = resp;
  }

}
