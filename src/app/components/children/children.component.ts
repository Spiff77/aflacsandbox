import {Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-children',
  templateUrl: './children.component.html',
  styleUrls: ['./children.component.scss']
})
export class ChildrenComponent implements OnInit {
  @Output() out = new EventEmitter<number>();
  @Input() person: any;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('click')
  doSomething(): void {
    this.out.emit(this.person.age);

  }


}
