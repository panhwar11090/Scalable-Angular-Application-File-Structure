import { Component } from '@angular/core';
import { CardModule } from 'primeng/card';  // Import CardModule from PrimeNG
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CardModule,ButtonModule,CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {

  cards = [
    {
      id: 1,
      title: 'Card 1',
      subheader: 'Subheader 1',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Description for Card 1',
    },
    {
      id: 2,
      title: 'Card 2',
      subheader: 'Subheader 2',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Description for Card 2',
    },
    {
      id: 3,
      title: 'Card 3',
      subheader: 'Subheader 3',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Description for Card 3',
    },
    {
      id: 4,
      title: 'Card 4',
      subheader: 'Subheader 4',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Description for Card 4',
    },
    {
      id: 5,
      title: 'Card 5',
      subheader: 'Subheader 5',
      image: 'https://primefaces.org/cdn/primeng/images/card-ng.jpg',
      description: 'Description for Card 5',
    },
  ];

}
