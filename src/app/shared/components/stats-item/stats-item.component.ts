import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stats-item',
  templateUrl: './stats-item.component.html',
  styleUrls: ['./stats-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StatsItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
