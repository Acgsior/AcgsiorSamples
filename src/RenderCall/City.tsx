import * as React from 'react';

interface CityProps {
  index: number;
  city: string;
}

export default class City extends React.PureComponent<CityProps> {
  render() {
    const { city, index } = this.props;
    console.log('=== City', index);
    return (
      <li key={city}>{city}</li>
    );
  }
}
