import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {
  path: string = 'https://us-central1-expensetracking-405714.cloudfunctions.net/'

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<any> {
    return this.http.get<any>(`${this.path}getall`);
  }

  addExpense(expense: any): Observable<any> {
    expense.date = expense.date.getTime();
    return this.http.post<any>(`${this.path}addexpense`, { expense: expense });
  }

  getEndMonth(): Observable<any> {
    return this.http.get<any>(`${this.path}getendmonth`);
  }

  getTotalByCategory(): Observable<any> {
    return this.http.get<any>(`${this.path}getcategoriestotal`);
  }
}
