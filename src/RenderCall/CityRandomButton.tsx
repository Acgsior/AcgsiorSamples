import * as React from 'react';
import { connect } from 'react-redux';
import { cityFilteringLoad, CityState } from './duck';
import { ThunkAction } from 'redux-thunk';

export type ComposedActionCreator = ThunkAction<void, { city: CityState }, {}>;

interface CityRandomButtonProps {
  cityFilteringLoad: (seed: string) => ComposedActionCreator;
}

let count = 0;

class CityRandomButton extends React.PureComponent<CityRandomButtonProps> {

  randomCities = () => this.props.cityFilteringLoad(`${Math.random()}`);

  render() {
    console.log('=== CityRandomButton', ++count);
    return (
      <button onClick={this.randomCities}>Random Cities</button>
    );
  }
}

export default connect(
  null,
  {
    cityFilteringLoad
  }
)
(CityRandomButton);
