import { createSelector, Action, createReducer, createAction, on, ActionReducer, MetaReducer, props } from "@ngrx/store";

// ACTIONS

export namespace CounterActions {
	export const increment = createAction(
		'[Counter Service] increment',
		props<{ context: string }>()
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

export const selectDocumentsSearchModuleState = (state: any) => state;

export const selectStateSlice = createSelector(
	selectDocumentsSearchModuleState,
	(state: any, props: any) => {
		if (state && props && props.context && state[props.context]) {
			return state[props.context] as CounterStateModule
		}
		console.warn('Attenzione: props.context non fornito per selectStateSlice');
		return { counterState: initialState } as CounterStateModule;
	}
);

export const selectCounterState = createSelector(
	selectStateSlice,
	(state: CounterStateModule) => state.counterState
);

export const getCounter = createSelector(
	selectCounterState,
	(state: CounterState) => state.counter
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

export function metaReducersFactory(context: string): { metaReducers: MetaReducer<any>[] }  {
	const noOpReducer = (state: any | undefined, action: Action) => state;
	const contextBasedMetaReducer = (reducer: ActionReducer<any>): ActionReducer<any> => (state, action) => {
		if (Object.keys(action).indexOf('context') !== -1) {
			const contextValue = (action as {type:string, context:string}).context;
			if (contextValue !== context) {
				return noOpReducer(state, action);
			}
			return reducer(state, action);
		}
		return reducer(state, action);
	};
	return { metaReducers: [contextBasedMetaReducer] };
}