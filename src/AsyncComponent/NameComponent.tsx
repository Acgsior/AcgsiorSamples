import * as React from 'react';

export interface NameComponentProps extends React.Props<{}> {
  name: string;
  label?: string;
}

export default class NameComponent extends React.Component<NameComponentProps> {
  render() {
    const { label, name } = this.props;
    return (
      <div>{label ? label : 'Fetched name: '} {name}</div>
    );
  }
}
