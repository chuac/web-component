import { DealRedemptionDialogComponent } from './../deal-redemption-dialog/deal-redemption-dialog.component';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common'
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-deal-details',
  templateUrl: './deal-details.component.html',
  styleUrls: ['./deal-details.component.scss']
})
export class DealDetailsComponent implements OnInit {
  id: number = 4;

  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private location: Location,
  ) { }

  ngOnInit() {
    // this.activatedRoute.params.pipe(
    //   tap((params) => {
    //     this.id = params.id;
    //   })
    // )
    // .subscribe();
  }

  openDialog(): void {
    this.dialog.open(
      DealRedemptionDialogComponent,
      {
        data: {
          id: this.id,
        }
      }
    );
  }

  back(): void {
    this.location.back();
  }
}
