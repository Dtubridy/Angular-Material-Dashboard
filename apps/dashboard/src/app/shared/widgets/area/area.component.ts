import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';

@Component({
  selector: 'angular-dashboard-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AreaComponent implements OnInit {
  @Input() data = []
  Highcharts = Highcharts;
  chartOptions!: {};
  
  constructor() { }

  ngOnInit(): void {
    this.chartOptions = {   
      chart: {
         type: "area"
      },
      title: {
         text: "Monthly Average Temperature"
      },
      subtitle: {
         text: "Source: WorldClimate.com"
      },
      xAxis:{
         categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      credits: {
         enabled: false
      },
      exporting:{
         enabled: true
      },
      yAxis: {          
         title:{
            text:"Temperature °C"
         } 
      },
      tooltip: {
         valueSuffix:" °C"
      },
      series: this.data
   };
   HC_exporting(Highcharts);
  }
}
