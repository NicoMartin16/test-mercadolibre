import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShareComponent } from './share.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';

const routerSpy = {navigate: jasmine.createSpy('navigate')};

describe('ShareComponent', () => {
  let component: ShareComponent;
  let fixture: ComponentFixture<ShareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShareComponent ],
      imports: [
        RouterTestingModule
      ],
      providers: [
        {
          provide: Router,
          useValue: routerSpy
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Debe redireccionar al listado de items', () => {

    // Arrange
    let termino: string = 'audifonos';

    // Act
    component.termino = termino;
    component.share();
    // Assert
    expect(routerSpy.navigate).toHaveBeenCalledWith(['/items'], { queryParams: { search: component.termino } });
  })
});
