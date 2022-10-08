import { Component, OnInit } from '@angular/core';
import { Item } from 'src/app/core/models/item.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {


  constructor() { }

  ngOnInit(): void {
  }
}
