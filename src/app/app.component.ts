import {Component,  OnInit} from '@angular/core';

import {PersonService} from './person.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  names: string[] = [];

  constructor(private ps: PersonService) {
  }

  async ngOnInit(): Promise<void> {
    this.names = await this.ps.findAll();
    console.log('end NgOnInit');
  }

}
