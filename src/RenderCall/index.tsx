import * as React from 'react';
import { connect } from 'react-redux';
import { citySearch, CitySearchAction, CityState } from './cityDuck';
import Cities from './Cities';

interface CitySectionProps {
  keyword: string;
  citySearch: (keyword: string) => CitySearchAction;
}

let count = 0;

class CitySection extends React.PureComponent<CitySectionProps> {
  render() {
    console.log('CitySection', ++count);
    const { keyword } = this.props;
    return (
      <div>
        <input
          type="text"
          value={keyword}
          onChange={({ target: { value } }) => {
            this.props.citySearch(value);
          }}
        />
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
