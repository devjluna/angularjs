import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css']
})
export class NgForComponent implements OnInit {

  cities: string[];
  people: Object[];

  constructor() { }

  ngOnInit() {
    this.cities = ['Arquipa','Lima','Huancayo','Iquitos'];
    this.people = [
      {name: 'Nelson', age: '35', gender: 'M'},
      {name: 'Robertulio', age: '40', gender: 'M'},
      {name: 'Ivan', age: '25', gender: 'M'},
      {name: 'Ronald', age: '32', gender: 'M'},
      {name: 'Javier', age: '36', gender: 'M'},
      {name: 'Jimmy', age: '26', gender: 'M'},
      {name: 'Jose', age: '25', gender: 'M'},
      {name: 'Bryan', age: '25', gender: 'M'},
      {name: 'Juana', age: '35', gender: 'F'},
      {name: 'Petra', age: '40', gender: 'F'}
    ];
  }

  showPerson(name: string){
    console.log(name);
  }

}
