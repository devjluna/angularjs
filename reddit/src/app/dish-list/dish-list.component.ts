import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.css']
})
export class DishListComponent implements OnInit {

  // dishes: string[];
  dishes: object[];

  constructor() { 
  }

  ngOnInit() {
    // this.dishes = ['Carapulcra', 'Arroz con pollo', 'Arroz con marizco', 'Pollo a la brasa'];
    this.dishes = [
      {name: 'Carapulcra', stars: 10},
      {name: 'Arroz con pollo', stars: 9},
      {name: 'Arroz con marizco', stars: 8},
      {name: 'Pollo a la brasa', stars: 7},
    ];
  }

}
