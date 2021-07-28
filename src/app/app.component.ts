import {AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Client} from './model/Client';
import {Supplier} from './model/Supplier';
import {interval, of, Subscription} from 'rxjs';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy, AfterViewInit{

  @ViewChildren('theDiv, thename') divs!: QueryList<HTMLDivElement>;

  em = new EventEmitter<string>();

  age  = 20;
  names: string[] = [];

  constructor() {
  }

  ngAfterViewInit(): void {
        console.log(this.divs.length);
    }

  ngOnInit(): void {
    this.em.subscribe( v => {
      console.log('Retrieveing data from observable');
      this.names.push(v);
    });
  }

  ngOnDestroy(): void {

  }

  addName(name: string): void {
    this.em.next(name);
  }
}
