import { Component, Input, OnInit } from '@angular/core';
import { IServiceCard } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.scss']
})
export class ServiceCardComponent implements OnInit {

  @Input() cardConfig!: IServiceCard;

  constructor() { }

  ngOnInit(): void
  {
    console.log(this.cardConfig);
  }

}
