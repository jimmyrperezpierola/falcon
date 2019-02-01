import React from 'react';

type OnlineStatusState = {
  isOnline: boolean;
};
export type OnlineStatusRenderProps = {
  isOnline: boolean;
};
export type OnlineStatusProps = {
  children: (renderProps: OnlineStatusRenderProps) => any;
};

export class OnlineStatus extends React.Component<OnlineStatusProps, OnlineStatusState> {
  constructor(props: OnlineStatusProps) {
    super(props);

    this.state = { isOnline: true };
    this.updateOnLineStatus = this.updateOnLineStatus.bind(this);
  }

  componentDidMount() {
    window.addEventListener('online', this.updateOnLineStatus);
    window.addEventListener('offline', this.updateOnLineStatus);

    // run detection logic when component mounts as React 16 optimizes too much and doesn't
    // re-render even when SSR html doesn't match client-side, more  details: https://github.com/facebook/react/issues/10591
    this.updateOnLineStatus();
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.updateOnLineStatus);
    window.removeEventListener('offline', this.updateOnLineStatus);
  }

  updateOnLineStatus() {
    const online = navigator && navigator.onLine;
    if (this.state.isOnline === online) {
      return;
    }

    this.setState({ isOnline: online });
  }

  render() {
    const { children } = this.props;
    const { isOnline: online } = this.state;

    return children({ isOnline: online });
  }
}
