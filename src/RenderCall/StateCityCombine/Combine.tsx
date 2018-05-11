import * as React from 'react';
import { connect } from 'react-redux';
import { CityState } from '../City/duck';
import { StateState } from '../State/duck';

let count = 0;
const combineResult: React.SFC<{ state: string, city: string }> = ({ state, city }) => {
  console.log('=== CombineSection', ++count);
  return (
    <p>Result: {state && city && `${state} - ${city}`}</p>
  );
};

export default connect(
  ({ state, city }: { state: StateState, city: CityState }) => ({
    state: state.selectedState,
    city: city.cities[0]
  })
)(combineResult);
