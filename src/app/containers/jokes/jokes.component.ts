import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Joke } from '../../models';
import {
  JokeStoreActions,
  JokeStoreSelectors,
  RootStoreState
} from '../../root-store';

@Component({
  selector: 'app-jokes',
  templateUrl: './jokes.component.html',
  styleUrls: ['./jokes.component.css']
})
export class JokesComponent implements OnInit {
  jokes$: Observable<Joke[]>;
  error$: Observable<any>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<RootStoreState.State>) {
    this.store.dispatch(JokeStoreActions.load());
  }

  ngOnInit() {
    this.jokes$ = this.store.pipe(
      select(JokeStoreSelectors.selectAllJokeItems)
    );

    this.error$ = this.store.pipe(select(JokeStoreSelectors.selectJokeError));

    this.isLoading$ = this.store.pipe(
      select(JokeStoreSelectors.selectJokeIsLoading)
    );
  }

  onRefresh() {
    this.store.dispatch(JokeStoreActions.refresh());
  }

  onSelect(id: number) {
    this.store.dispatch(JokeStoreActions.select({ id }));
  }
}
