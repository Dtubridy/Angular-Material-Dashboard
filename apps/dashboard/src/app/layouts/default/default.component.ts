import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-dashboard-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultComponent implements OnInit {
  sidebarOpened = false;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggle(){
    this.sidebarOpened = !this.sidebarOpened;
  }
}
