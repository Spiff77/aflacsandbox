import {Component, OnDestroy, OnInit} from '@angular/core';
import {interval, Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.scss']
})
export class AComponent implements OnInit, OnDestroy {
  inter: any;
  private subscription!: Subscription;

  constructor(private activatedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    //this.subscription =  interval(1000).subscribe(v => console.log(v));
    console.log(this.activatedRoute.snapshot.paramMap.get('theage'));
    // this.activatedRoute.paramMap.subscribe( v => console.log(v.get('theage')));
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
