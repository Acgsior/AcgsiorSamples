import * as React from 'react';
import { connect } from 'react-redux';
import { Action } from 'redux';
import { stateLoad, stateSelect, StateSelectAction, StateState } from './duck';

interface CitiesProps {
  states: Array<string>;
  selectedState: string;
  stateLoad: () => Action;
  stateSelect: (selection: string) => StateSelectAction;
}

let count = 0;

class States extends React.PureComponent<CitiesProps> {
  componentDidMount() {
    this.props.stateLoad();
  }

  onStateSelect = ({ target: { value } }: React.ChangeEvent<HTMLSelectElement>) => {
    this.props.stateSelect(value);
  }

  renderStates = () => {
    const { states } = this.props;
    return states.map((state: string, index: number) =>
      <option key={index} value={state}>{state}</option>);
  }

  render() {
    console.log('=== States', ++count);
    const { selectedState } = this.props;
    return (
      <div>
        <select onChange={this.onStateSelect}>{this.renderStates()}</select>
        <p>Selected state: {selectedState}</p>
      </div>
    );
  }
}

export default connect(
  ({ state }: { state: StateState }) => ({
    states: state.states,
    selectedState: state.selectedState
  }),
  {
    stateLoad,
    stateSelect
  }
)
(States);
