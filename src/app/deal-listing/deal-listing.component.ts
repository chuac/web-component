import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-deal-listing',
  templateUrl: './deal-listing.component.html',
  styleUrls: ['./deal-listing.component.scss']
})
export class DealListingComponent implements OnInit {
  dealIds = [1, 2, 3, 4];

  constructor() { }

  ngOnInit() {
  }

}
