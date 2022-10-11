import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing'

import { ItemService } from './item.service';
import { HttpService } from '../../../../core/services/http.service';
import { Item } from 'src/app/core/models/item.model';
import { environment } from 'src/environments/environment';


describe('ItemService', () => {
  let httpMock: HttpTestingController;
  let service: ItemService;
  let apiEndpointItemsBySearch = `${environment.apiUrl}/items`



  beforeEach(() => {
    const injector = TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        HttpService,
        ItemService
      ]
    });
    httpMock = injector.inject(HttpTestingController);
    service = TestBed.inject(ItemService);
  });

  it('should be created', () => {
    const itemService: ItemService = TestBed.inject(ItemService);
    expect(itemService).toBeTruthy();
  });

});
