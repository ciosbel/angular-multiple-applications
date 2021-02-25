import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CounterActions, CounterState, selectCounterState } from 'common-store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-view1',
  templateUrl: './view1.component.html',
  styleUrls: ['./view1.component.scss']
})
export class View1Component implements OnInit {

  currentState$: Observable<CounterState>;

  constructor(private store: Store<CounterState>) {
    this.currentState$ = this.store.pipe(select(selectCounterState));
  }

  ngOnInit(): void {
  }

  onClick($event: any) {
		this.store.dispatch(CounterActions.increment());
  }
}
