import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { ExpensesResolver } from 'src/resolvers/expenses.resolver';
import { ExpectedEndMonthExpensesResolver } from 'src/resolvers/expected-end-month-expenses.resolver';
import { TotalExpensesCategoryResolver } from 'src/resolvers/total-expenses-category.resolver';

const routes: Routes = [
  {
    path: 'main',
    component: MainComponent,
    resolve: {
      expenses: ExpensesResolver,
      expectedEndMonthExpenses: ExpectedEndMonthExpensesResolver,
      totalByCategory: TotalExpensesCategoryResolver
    }
  },
  { path: '**', redirectTo: 'main', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
