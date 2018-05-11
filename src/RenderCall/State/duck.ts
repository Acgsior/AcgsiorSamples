import * as faker from 'faker';
import { Action } from 'redux';

export const STATE_LOAD = 'state/stateLoad';
export const STATE_SELECT = 'state/stateSelect';

export const stateLoad = (seed: string = '0'): Action => ({
  type: STATE_LOAD
});

export interface StateSelectAction extends Action {
  payload: { selection: string };
}

export const stateSelect = (selection: string): StateSelectAction => ({
  type: STATE_SELECT,
  payload: { selection }
});

export type StateState = {
  states: Array<string>;
  selectedState: string;
};
const initialState: StateState = {
  states: [],
  selectedState: ''
};

const fakeState = () => faker.fake('{{address.state}}');

const reducerHandlers = {
  [STATE_LOAD]: (state: StateState) =>
    Object.assign({}, state, { states: Array(3).fill(0).map(_ => fakeState()) }),

  [STATE_SELECT]: (state: StateState, action: StateSelectAction) =>
    Object.assign({}, state, { selectedState: action.payload.selection })
};

export const reducer = (state: StateState = initialState, action: Action | StateSelectAction) => {
  const { type } = action;
  const handler = reducerHandlers[type];
  return handler ? handler(state, action) : state;
};
