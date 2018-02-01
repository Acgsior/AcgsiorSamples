import * as React from 'react';

export interface NameComponentProps extends React.Props<{}> {
  name?: string;
}

export default class NameComponent extends React.Component<NameComponentProps> {
  render() {
    const { name } = this.props;
    return (
      <div>Fetched name: {name}</div>
    );
  }
}
