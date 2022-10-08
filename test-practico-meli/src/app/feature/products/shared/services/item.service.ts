import { Injectable } from '@angular/core';

import { Observable, map } from 'rxjs';
import { HttpService } from '../../../../core/services/http.service';
import { Item, Items } from '../../../../core/models/item.model';
import { environment } from 'src/environments/environment';
import { ItemRes, ItemResponse } from '../../../../shared/models/ItemResponse.model';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpService) { }

  public getItemsByTerm(termino: string): Observable<Item[]> {
    return this.http.doGet<Items>(`${environment.apiUrl}/items?q=${termino}`).pipe(
      map((value) => value.items.filter((value, index) => index <= 3 ? value : undefined  ))
    );
  }

  public getCategories(termino: string): Observable<string[]> {
    return this.http.doGet<Items>(`${environment.apiUrl}/items?q=${termino}`).pipe(
      map((value) => value.categories)
    );
  }

  public getItemById(id: string): Observable<ItemRes> {
    return this.http.doGet<ItemResponse>(`${environment.apiUrl}/items/${id}`).pipe(
      map((value) => value.item)
    )
  }
}
