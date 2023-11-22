import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseService } from 'src/service/expense.service';

@Injectable({
  providedIn: 'root',
})
export class TotalExpensesCategoryResolver {

  constructor(
    private expenseService: ExpenseService
  ) {}

  resolve(): Observable<any> {
    return this.expenseService.getTotalByCategory();
  }
}
