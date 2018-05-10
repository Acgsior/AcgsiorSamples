import * as faker from 'faker';
import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';

export const CITY_LOAD = 'renderCall/cityLoad';
export const CITY_SEARCH = 'renderCall/citySearch';

export interface CityLoadAction extends Action {
  payload: { seed: string };
}

export interface CitySearchAction extends Action {
  payload: { keyword: string };
}

export const cityLoad = (seed: string = '0'): CityLoadAction => ({
  type: CITY_LOAD,
  payload: {
    seed
  }
});

export const citySearch = (keyword: string): CitySearchAction => ({
  type: CITY_SEARCH,
  payload: {
    keyword
  }
});

export const cityFilteringLoad = (seed: string): ThunkAction<void, { city: CityState }, {}> =>
  (dispatch, getState: () => { city: CityState }) => {
    const { keyword } = getState().city;

    dispatch(cityLoad(seed));
    keyword && dispatch(citySearch(keyword));
  };

export type CityState = {
  cities: Array<string>;
  keyword: string;
};
const initialState: CityState = {
  cities: [],
  keyword: ''
};

let cachedSeed: string;
const cachedCities: { [key: string]: Array<string> } = {};
const fakeCity = () => faker.fake('{{address.city}}');

const reducerHandlers = {
  [CITY_LOAD]: (state: CityState, action: CityLoadAction) => {
    const { payload: { seed } } = action;

    const cities = cachedCities[seed] ? cachedCities[seed] :
      Array(5).fill(0).map(_ => fakeCity());

    cachedCities[seed] = cities;
    cachedSeed = seed;

    return Object.assign({}, state, { cities });
  },

  [CITY_SEARCH]: (state: CityState, action: CitySearchAction) =>
    Object.assign({}, state, {
      cities: cachedCities[cachedSeed].filter(city => city.indexOf(action.payload.keyword) >= 0),
      keyword: action.payload.keyword
    })
};

export const reducer = (state: CityState = initialState, action: CityLoadAction | CitySearchAction) => {
  const { type } = action;
  const handler = reducerHandlers[type];
  return handler ? handler(state, action) : state;
};
