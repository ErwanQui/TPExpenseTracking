import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-fail-snackbar',
  templateUrl: './fail-snackbar.component.html',
  styleUrls: ['./fail-snackbar.component.scss']
})
export class FailSnackBarComponent {

  /** Constructor of the FailSnackBarComponent class */
  constructor(
    private snackBar: MatSnackBar
  ) {}

  /** Close the snackBar */
  dismiss(): void {
    this.snackBar.dismiss();
  }
}
