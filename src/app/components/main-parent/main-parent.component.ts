import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-parent',
  templateUrl: './main-parent.component.html',
  styleUrls: ['./main-parent.component.scss']
})
export class MainParentComponent implements OnInit {

  p1 = {
    name: 'Jack',
    age: 30
  };
  p2 = {
    name: 'Daniel',
    age: 32
  };

  constructor() { }

  ngOnInit(): void {
  }

  getAgeFromChildren(age: number): void {
    console.log('PARENT', age);
  }
}
