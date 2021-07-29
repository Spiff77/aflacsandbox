import { Component, OnInit } from '@angular/core';
import {PersonService} from '../../person.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  name = '';

  constructor(private ps: PersonService) { }

  ngOnInit(): void {
  }

  addPerson(): void {
    this.ps.add(this.name);
  }


}
