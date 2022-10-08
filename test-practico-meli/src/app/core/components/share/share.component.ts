import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-share',
  templateUrl: './share.component.html',
  styleUrls: ['./share.component.sass']
})
export class ShareComponent implements OnInit {

  public termino: string = '';
 

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  share() {
    this.router.navigate(['/items'], {
      queryParams: {
        search: this.termino
      }
    })
  }

}
