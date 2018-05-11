import * as React from 'react';
import { connect } from 'react-redux';
import { cityFilteringLoad, CityState } from './duck';
import { ThunkAction } from 'redux-thunk';

export type ComposedActionCreator = ThunkAction<void, { city: CityState }, {}>;

interface CityRandomButtonProps {
  cityFilteringLoad: (seed: string, firstOnly?: boolean) => ComposedActionCreator;
}

let count = 0;

class CityRandomButton extends React.PureComponent<CityRandomButtonProps> {

  randomCities = () => this.props.cityFilteringLoad(`${Math.random()}`);

  randomFirstCity = () => this.props.cityFilteringLoad(`${Math.random()}`, true);

  render() {
    console.log('=== CityRandomButton', ++count);
    return (
      <div>
        <button onClick={this.randomCities}>Random Cities</button>
        <button onClick={this.randomFirstCity}>Random City</button>
      </div>
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
