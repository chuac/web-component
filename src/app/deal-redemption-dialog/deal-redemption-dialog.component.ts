import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-deal-redemption-dialog',
  templateUrl: './deal-redemption-dialog.component.html',
  styleUrls: ['./deal-redemption-dialog.component.scss']
})
export class DealRedemptionDialogComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
  }

}
