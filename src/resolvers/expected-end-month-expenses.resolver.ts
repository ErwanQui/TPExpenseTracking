import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExpenseService } from 'src/service/expense.service';

@Injectable({
  providedIn: 'root',
})
export class ExpectedEndMonthExpensesResolver {

  constructor(
    private expenseService: ExpenseService
  ) {}

  resolve(): Observable<number> {
    return this.expenseService.getEndMonth();
  }
}
