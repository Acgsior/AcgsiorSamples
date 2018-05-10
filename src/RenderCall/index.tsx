import * as React from 'react';
import { connect } from 'react-redux';

import Cities from './Cities';
import CityRandomButton from './CityRandomButton';

import { citySearch, CitySearchAction, CityState } from './duck';

interface CitySectionProps {
  keyword: string;
  citySearch: (keyword: string) => CitySearchAction;
}

let count = 0;

class CitySection extends React.PureComponent<CitySectionProps> {

  render() {
    console.log('=== City Container', ++count);
    const { keyword } = this.props;
    return (
      <div>
        <input
          value={keyword}
          onChange={({ target: { value } }) => this.props.citySearch(value)}
        />
        <CityRandomButton />
        <Cities />
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
)(CitySection);
