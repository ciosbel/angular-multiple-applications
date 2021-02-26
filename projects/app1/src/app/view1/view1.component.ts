import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CounterActions, CounterState, getCounter } from 'common-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  currentState$: Observable<number>;

  constructor(private store: Store<CounterState>) {
    this.currentState$ = this.store.pipe(select(getCounter));
  }

  ngOnInit(): void {
  }

  onClick($event: any) {
		this.store.dispatch(CounterActions.increment({context: "app1CounterModule"}));
  }
}
