import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FailSnackBarComponent } from 'src/app/common/fail-snackbar/fail-snackbar.component';
import { SuccessSnackBarComponent } from 'src/app/common/success-snackbar/success-snackbar.component';

@Injectable()
export class SnackBarsService {

  /** Constructor of the SnackBarsService class
   * 
   * @param sncakBar Use to create custom snackBars
   */
  constructor(
    private snackBar: MatSnackBar
  ) {}

  /** Create a snackBar to display a success */
  openSuccessSnackBar(): void {
    this.snackBar.openFromComponent(SuccessSnackBarComponent, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['successSnackBar']
    });
  }

  /** Create a snackBar to display a fail */
  openFailSnackBar(): void {
    this.snackBar.openFromComponent(FailSnackBarComponent, {
      duration: 2000,
      horizontalPosition: 'right',
      verticalPosition: 'bottom',
      panelClass: ['failSnackBar']
    });
  }
}