import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ItemService } from '../../shared/services/item.service';

import { DetailProductsComponent } from './detail-products.component';
import { RouterTestingModule } from '@angular/router/testing';
import { itemMock } from 'src/app/shared/mocks/Item.mock';
import { ItemRes } from '../../../../shared/models/ItemResponse.model';
import { categoriesMock } from '../../../../shared/mocks/categories.mock';

describe('DetailProductsComponent', () => {
  let component: DetailProductsComponent;
  let fixture: ComponentFixture<DetailProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailProductsComponent ],
      imports: [
        HttpClientModule,
        RouterTestingModule
      ],
      providers: [
        ItemService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debe obtener los items por id', () => {

    // Arrange
    let item: ItemRes = itemMock;
    let categories: string[] = categoriesMock;
    // Act
    component.ngOnInit()
    component.getItem(item);
    // Assert
    expect(component.item).toEqual(item);
    expect(component.listCategories).toEqual(categories);

  });

  it('Debe ejecutarse el error si el item no es encontrado', () => {
    // arrange
    let error = {
      status: 404,
      message: 'Item not found'
    };
    // act
    component.ngOnInit();
    component.getError(error);
    // assert
    expect(component.error).toEqual(error);
  })
});
