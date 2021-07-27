import { Component } from '@angular/core';
import {Client} from './model/Client';
import {Supplier} from './model/Supplier';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'My super app';
  count = 0;

  selectValue = '';

  color = undefined;

  classList = ['bold red'];

  c = new Client('Thomas', 'Lhomme', true, 36);
  s = new Supplier(1, 'Aflac', '4444444', 100);

  addOne(): void {
    this.count++;
  }

  computeStyle(): string {
    console.log('Hello');
    if (this.s.ca < 1000){
      return 'low';
    }else if (this.s.ca >= 1000 && this.s.ca < 5000){
      return 'medium';
    }else{
      return 'high';
    }
  }

  toggle(): void {
    this.c.active = !this.c.active;
  }

  divClick(event: any): void {
    console.log(event.target.innerHTML);
  }
}
