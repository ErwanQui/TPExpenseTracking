import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { MatListModule } from '@angular/material/list';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import { MatGridListModule } from '@angular/material/grid-list'
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DATE_LOCALE, MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { NgChartsModule } from 'ng2-charts';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MainComponent } from './main/main.component';
import { AddExpenseDialogComponent } from './main/add-expense-dialog/add-expense-dialog.component';
import { LineChartComponent } from './main/line-chart/line-chart.component'; 
import { SuccessSnackBarComponent } from './common/success-snackbar/success-snackbar.component';
import { FailSnackBarComponent } from './common/fail-snackbar/fail-snackbar.component';
import { SnackBarsService } from 'src/service/snackbar.service';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    AddExpenseDialogComponent,
    LineChartComponent,
    SuccessSnackBarComponent,
    FailSnackBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatListModule,
    MatDialogModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatGridListModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    NgChartsModule,
    MatTabsModule,
    MatIconModule,
    MatSnackBarModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'fr-FR'},
    SnackBarsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


// const functions = require('@google-cloud/functions-framework');

// const { Pool } = require('pg');

// functions.http('trydb', async (req, res) => {
//   res.set('Access-Control-Allow-Origin', '*');
//   const db = new Pool({
//     user: 'postgres',
//     host: '/cloudsql/expensetracking-405714:us-central1:admin',
//     database: 'Test',
//     password: 'admin',
//     port: 5432,
//   });

//   const query = `
//     CREATE TABLE IF NOT EXISTS TableTest (
//       value INTEGER,
//       name VARCHAR(255)
//     );
//   `;

//   try {
//     const client = await db.connect();
//     await client.query(query);
//     client.release();
//     res.status(200).json('Table créée avec succès');
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });




// {
//   "dependencies": {
//     "@google-cloud/functions-framework": "^3.0.0",
//     "pg": "^8.11.3"
//   }
// }