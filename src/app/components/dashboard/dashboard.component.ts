import { Component, OnInit } from '@angular/core';

export interface IServiceCard {
  image_address?: string;
  image_alt?: string;
  title: string;
  content: string;
  button_url?: string;
  button_label: string;
  button_create_service_label: string;
  button_create_service_url?: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  cardDetails!: Array<IServiceCard>;


  constructor() {
    this.cardDetails = [
      {
        image_address: 'assets/svg/ai_video.svg',
        image_alt: 'Here is an image of video camera',
        title: 'AI Video',
        content: 'Book one of our professional photographers and receive your content everyday after your photography',
        button_url: '',
        button_label: 'My Order',
        button_create_service_label: 'Order AI Video',
        button_create_service_url: ''
      }
    ];
   }


}
