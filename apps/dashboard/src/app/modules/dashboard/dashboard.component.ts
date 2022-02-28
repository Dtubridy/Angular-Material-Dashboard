import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';

@Component({
  selector: 'angular-dashboard-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardComponent implements OnInit {
chartData: any = [];
cardData: any = [];
pieData: any = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.chartData = this.dashboardService.getData();
    this.cardData = this.dashboardService.getCardData();
    this.pieData = this.dashboardService.getPieData();
  }
}
