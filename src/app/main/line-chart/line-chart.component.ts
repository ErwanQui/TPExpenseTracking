import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.scss']
})
export class LineChartComponent implements OnInit, OnChanges {
  
  /** The data to display */
  @Input({ required: true })
  data: Array<any> = [];

  /** The data object used by the chart */
  lineChartData: ChartData | any;

  /** The list of months */
  lineChartLabels: Array<any> = [];

  /** The list of months translated */
  translatedLineChartLabels: Array<string> = [];

  /** The type of chart */
  lineChartType: ChartType = 'bar';

  /** The options of the chart */
  lineChartOptions: ChartOptions | any;

  /** The boolean used to hide the legend */
  lineChartLegend: boolean = false;

  constructor(
  ) {}

  /** Method called when the component is created, it init the parameters */
  ngOnInit() {
    this.setParameters();
    this.setData();
  }

  /** Method called when the component changes, it updates the data */
  ngOnChanges(changes: SimpleChanges) {
    if (this.lineChartData) {
      this.data = changes['data'].currentValue;
      this.setData();
    }
  }

  /** Set parameters of the chart */
  setParameters() {
    this.lineChartLegend = false;
    this.lineChartOptions = {
      responsive: true,
      maintainAspectRatio: true,
      scales: {
        x: {
          grid: {
            drawOnChartArea: false
          },
          ticks: {
            font: {
              size: 12
            },
            color: '#005b7c'
          }
        },
        y: {
          min: 0,
          grid: {
            drawTicks: false,
          },
          border: {
            dash: [5,5]
          },
          ticks: {
            font: {
              size: 12
            },
            color: '#005b7c'
          }
        }
      }
    };
  }

  /** Set the data of the chart */
  setData() {
    const datas: Array<number> = [];
    const labels: Array<string> = [];

    this.data.forEach((expenses) => {
      labels.push(expenses.category);
      datas.push(expenses.sum);
    });
    this.lineChartData = {
      labels: labels,
      datasets: [
        {
          data: datas,
          fill: false,
          tension: 0,
          borderColor: '#0b0784',
          pointBackgroundColor: '#0b0784',
          backgroundColor:"#0b0784",
          pointBorderColor: '#0b0784',
          borderWidth: 2
        }
      ]
    };
  }
}

