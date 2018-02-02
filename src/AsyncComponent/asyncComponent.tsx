import * as React from 'react';

interface AsyncComponentState {
  component: React.ComponentClass | null;
  componentProps: {};
}

const asyncComponent = (
  importComponent: () => React.ComponentClass,
  loader: () => Promise<{}>,
  forceSteady: boolean = true) =>
  class extends React.Component<{}, AsyncComponentState> {
    constructor(props: {}) {
      super(props);

      this.state = {
        component: null,
        componentProps: {}
      };
    }

    shouldComponentUpdate(nextProps: {}, nextState: AsyncComponentState) {
      return nextState.component !== this.state.component || !forceSteady;
    }

    componentDidMount() {
      const { component } = this.state;
      if (component === null) {
        loader().then((componentProps) => {
          this.setState({
            component: importComponent(),
            componentProps
          });
        });
      }
    }

    render() {
      const { component: C, componentProps } = this.state;
      return (
        <div>
          {C !== null ? <C {...componentProps} /> : 'Loading...'}
        </div>
      );
    }
  };

export default asyncComponent;