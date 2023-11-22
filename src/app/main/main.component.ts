import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { ExpenseService } from 'src/service/expense.service';
import { AddExpenseDialogComponent } from './add-expense-dialog/add-expense-dialog.component';
import { SnackBarsService } from 'src/service/snackbar.service';
import { CATEGORIES } from '../models/main.model';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  /** The list of expenses */
  expenses: Array<any>;
  
  /** The list of categories */
  categories: Array<string>

  /** The columns of the table */
  displayedColumns: string[] = ['value', 'name', 'category', 'date', 'place_number', 'place_address', 'place_postal_code', 'city'];
  
  /** Expected amount of expenses at the end of month */
  expectedEndMonthExpenses: number;
  
  /** The total amount by categories */
  totalByCategory: any;

  /** Constructor of the MainComponent
   * 
   * @param activatedRoute The service used to access data from resolver
   * @param expenseService The service used to handle expenses
   * @param dialog The service used to access data from resolver
   * @param snackbarsService The service used to handle snackbars
   */
  constructor(
    private activatedRoute: ActivatedRoute,
    private expenseService: ExpenseService,
    private dialog: MatDialog,
    private snackbarsService: SnackBarsService
  ) {
    this.expenses = [];
    this.categories = CATEGORIES;
    this.expectedEndMonthExpenses = 0;
  }

  /** Init values from resolvers */
  ngOnInit() {
    this.activatedRoute.data.subscribe((data) => {
      this.expenses = data['expenses'];
      this.expectedEndMonthExpenses = Math.ceil(data['expectedEndMonthExpenses']);
      this.totalByCategory = data['totalByCategory'];
    })
  }

  /** Use to display the date in the table */
  displayDate(date :Date) {
    const dateObject = new Date(date);
    return dateObject.toLocaleDateString();
  }
  
  /** Open a dialog to enter new expense details */
  openDialog(): void {
    const dialogRef = this.dialog.open(AddExpenseDialogComponent);

    dialogRef.afterClosed().subscribe(dialogResult => {
      if (dialogResult) {
        this.expenseService.addExpense(dialogResult).subscribe(() => {
          this.snackbarsService.openSuccessSnackBar();
          this.expenseService.getAll().subscribe((expenses) => {
            this.expenses = expenses
          });
          this.expenseService.getEndMonth().subscribe((expectedEndMonthExpenses) => {
            this.expectedEndMonthExpenses = Math.ceil(expectedEndMonthExpenses);
          });
          this.expenseService.getTotalByCategory().subscribe((totalByCategory) => {
            this.totalByCategory = totalByCategory
          });
        }, (error) => {
          this.snackbarsService.openFailSnackBar();
          console.error(error);
        });
      }
    });
  }
}
