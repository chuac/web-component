import { Component, Input, ViewEncapsulation, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
  // Input property has to be lower case since web-components will transform all HTML property names to lower case
  @Input()
  uniqueid: unknown;

  constructor(
    private route: ActivatedRoute,
  ){}

  ngOnInit() {
    console.log('se id in component: ' + this.route.snapshot.params);
    console.log('se id in component query params: ' + this.route.snapshot.queryParams);
  }
}
