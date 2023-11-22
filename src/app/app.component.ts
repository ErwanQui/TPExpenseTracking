import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ExpenseService } from 'src/service/expense.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'TPExpenseTracking';

    /** Constructor of the DirectoryDetailsComponent class
   * 
   * @param router 
   */
  constructor(
    private router: Router
  ) {}

  ngOnInit() {
    this.router.navigate(['main'])
  }
}
