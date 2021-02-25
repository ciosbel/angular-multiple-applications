
import { createFeatureSelector, createSelector, Action, createReducer, createAction, on } from "@ngrx/store";

// ACTIONS

export namespace CounterActions {
	export const increment = createAction(
		'[Counter Service] increment'
	);
}

// WIRING

export interface CounterStateModule {
	counterState: CounterState;
}

export const counterStateModuleReducers = {
	counterState: counterStateReducer
};

// SELECTORS

export const counterStateModuleFeatureKey = 'counterStateModule';

export const selectDocumentsSearchModuleState = createFeatureSelector<CounterStateModule>(counterStateModuleFeatureKey);

export const selectCounterState = createSelector(
	selectDocumentsSearchModuleState,
	(state: CounterStateModule) => state.counterState
);

// STATE/REDUCER

export interface CounterState {
	counter: number;
}

const initialState: CounterState = {
	counter: 0
};

export function counterStateReducer(state: CounterState | undefined, action: Action) {
	return _counterStateReducer(state, action);
}

const _onIncrement = (currentState: CounterState, test: any) => {
    return {
        ...currentState,
        counter: currentState.counter + 1
    };
};

const _counterStateReducer = createReducer(
	initialState,
	on(CounterActions.increment, _onIncrement)
);