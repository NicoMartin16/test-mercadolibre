import { ComponentFixture, TestBed } from "@angular/core/testing";

import { ListProductsComponent } from "./list-products.component";
import { RouterTestingModule } from "@angular/router/testing";
import { ItemService } from "../../shared/services/item.service";

import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Item } from "src/app/core/models/item.model";

import { listItems } from "../../../../shared/mocks/items.mock";
import { Router } from "@angular/router";

const routerSpy = { navigate: jasmine.createSpy("navigate") };

describe("ListProductsComponent", () => {
  let component: ListProductsComponent;
  let fixture: ComponentFixture<ListProductsComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListProductsComponent],
      imports: [RouterTestingModule, HttpClientTestingModule],
      providers: [
        ItemService,
        {
          provide: Router,
          useValue: routerSpy,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ListProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("debe redireccionar al detalle del item", () => {
    // arrange
    let mockItem: Item = listItems[0];
    // act
    component.navigateDetail(mockItem);
    // assert
    expect(routerSpy.navigate).toHaveBeenCalledWith([`item/${mockItem.id}`]);
  });
});
