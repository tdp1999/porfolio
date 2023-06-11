import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PorfolioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
