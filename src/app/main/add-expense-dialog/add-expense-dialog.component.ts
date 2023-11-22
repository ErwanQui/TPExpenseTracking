import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidationErrors, ValidatorFn } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CATEGORIES, Expense } from 'src/app/models/main.model';

@Component({
  selector: 'app-add-expense-dialog',
  templateUrl: './add-expense-dialog.component.html',
  styleUrls: ['./add-expense-dialog.component.scss']
})
export class AddExpenseDialogComponent implements OnInit{

/** The form with member details */
newExpenseForm: any;

/** The new expense details */
expense: any;
// expense: Expense;

/** The list of categories */
categories: Array<string>

/** Whether the name is valid */
validName: boolean;

/** Constructor of the AddExpenseDialogComponent
  * 
  * @param dialogRef Used to manage the dialog interface
  */
constructor(
  public dialogRef: MatDialogRef<AddExpenseDialogComponent>
) {
  this.expense = {
    value: '',
    name: '',
    category: 'sorties',
    date: null
  };
  this.categories = CATEGORIES;
  this.validName = false;
}


  /** Method called when the component is created
 * Set default values
 */
  ngOnInit(): void {

  this.newExpenseForm = new FormGroup({
    value: new FormControl('', Validators.required),
    name: new FormControl('', 
      Validators.compose([Validators.required, this.validNameValidators()])
      ),
    category: new FormControl('sorties', Validators.required),
    date: new FormControl('', Validators.required),
    place_number: new FormControl(null),
    place_address: new FormControl(null),
    place_postal_code: new FormControl(null),
    city: new FormControl(null)
  });
} 
  
  /** Update expense values
  * 
  * @param attribute The attribute to update
  * @param event The object with the new value
  */
 onUpdate(attribute: string, event: any): void {
  if (event.value) {
    this.expense[attribute] = event.value;

    if(attribute === 'name') {
      this.validName = true;
      this.newExpenseForm.get('name').updateValueAndValidity();
    }
  }
 }

  /** Close the dialog interface */
  validate(validate: boolean): void {
    if (validate) {
      if (this.newExpenseForm.valid) {
        this.dialogRef.close(this.expense);
      } else {
        this.newExpenseForm.markAllAsTouched();
      }
    } else {
      this.dialogRef.close();
    }
  }

  /** Valid the name field of the form
   * 
   * @returns Whether the field has an error
   */
    private validNameValidators(): ValidatorFn {
      return (): ValidationErrors | null => {
        return !this.expense.name.includes("'") ? null : { validName: true };
      };
    }
}
