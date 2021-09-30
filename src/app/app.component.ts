import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Input property has to be lower case since web-components will transform all HTML property names to lower case
  @Input()
  uniqueid: unknown;
}
