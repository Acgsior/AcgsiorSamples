import * as React from 'react';

interface AsyncComponentHocState {
  resolved: boolean;
  componentProps: {};
}

interface AsyncComponentHocProps {
  loader: () => Promise<{}> | {};
  component: (props: {}) => React.ReactNode;
}

export default class AsyncComponentHoc extends React.Component<AsyncComponentHocProps, AsyncComponentHocState> {
  constructor(props: AsyncComponentHocProps) {
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
      new Promise(resolve => resolve(loader())).then((componentProps) => {
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