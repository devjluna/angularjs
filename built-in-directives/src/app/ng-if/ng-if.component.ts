import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-if',
  templateUrl: './ng-if.component.html',
  styleUrls: ['./ng-if.component.css']
})
export class NgIfComponent implements OnInit {

  show: boolean;
  a: number;
  b: number;
  name: string;

  constructor() { }

  ngOnInit() {
    this.show = true;
    this.a = 21;
    this.b = 15;
    this.name = "Jimmy";
  }

  hasAccess(): boolean{
    return false;
  }

}
