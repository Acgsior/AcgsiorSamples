import * as React from 'react';
import { connect } from 'react-redux';

import Cities from './City/Cities';
import CityRandomButton from './City/CityRandomButton';
import States from './State/States';
import Combine from './StateCityCombine/Combine';

import { citySearch, CitySearchAction, CityState } from './City/duck';

interface CitySectionProps {
  keyword: string;
  citySearch: (keyword: string) => CitySearchAction;
}

let count = 0;

class StateCitySection extends React.PureComponent<CitySectionProps> {

  onCityKeywordChange = ({ target: { value } }: React.ChangeEvent<HTMLInputElement>) => this.props.citySearch(value);

  render() {
    console.log('=== City Container', ++count);
    const { keyword } = this.props;
    return (
      <div>
        <States />
        <input value={keyword} onChange={this.onCityKeywordChange} />
        <CityRandomButton />
        <Cities />
        <Combine />
      </div>
    );
  }
}

export default connect(
  ({ city }: { city: CityState }) => ({
    keyword: city.keyword
  }),
  {
    citySearch
  }
)(StateCitySection);
