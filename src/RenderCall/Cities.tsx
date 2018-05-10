import * as React from 'react';
import { connect } from 'react-redux';
import { cityLoad, CityLoadAction, CityState } from './duck';
import City from './City';

interface CitiesProps {
  cities: Array<string>;
  keyword: string;
  cityLoad: (seed?: string) => CityLoadAction;
}

let count = 0;

class Cities extends React.PureComponent<CitiesProps> {
  componentDidMount() {
    this.props.cityLoad();
  }

  renderCities = () => {
    const { cities } = this.props;
    return cities.map((city: string, index: number) => <City key={index} index={index} city={city} />);
  }

  render() {
    console.log('=== Cities', ++count);
    const { keyword } = this.props;
    return (
      <div>
        <p>Result{keyword && ` of keyword: "${keyword}"`}</p>
        <ul>{this.renderCities()}</ul>
      </div>
    );
  }
}

export default connect(
  ({ city }: { city: CityState }) => ({
    cities: city.cities,
    keyword: city.keyword
  }),
  {
    cityLoad
  }
)
(Cities);
