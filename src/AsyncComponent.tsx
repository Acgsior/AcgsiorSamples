import * as React from 'react';

interface AsyncComponentState {
  resolved: boolean;
  componentProps: {};
}

interface AsyncComponentProps {
  loader: () => Promise<{}> | {};
  component: (props: {}) => React.ReactNode;
}

export default class AsyncComponent extends React.Component<AsyncComponentProps, AsyncComponentState> {
  constructor(props: AsyncComponentProps) {
    super(props);

    this.state = {
      resolved: false,
      componentProps: {}
    };
  }

  componentDidMount() {
    const { resolved } = this.state;
    if (!resolved) {
      const { loader } = this.props;
      new Promise(() => loader()).then((componentProps) => {
        this.setState({ resolved: true, componentProps });
      });
    }
  }

  render() {
    const { resolved, componentProps } = this.state;
    const { component } = this.props;
    return (
      <div>
        {
          resolved ? component(componentProps) : 'Loading...'
        }
      </div>
    );
  }
}