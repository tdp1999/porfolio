import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porfolio-item',
  templateUrl: './porfolio-item.component.html',
  styleUrls: ['./porfolio-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PorfolioItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
