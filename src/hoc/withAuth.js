import React from "react";

const WithAuth = WrapComponent => {
  return class WithAuth extends React.Component {
    state = {
      isAuthorized: false
    };

    toggleAuth = () => {
      this.setState(prevState => ({
        isAuthorized: !prevState.isAuthorized
      }));
    };

    render() {
      const { isAuthorized } = this.state;

      return (
        <WrapComponent
          isAuthorized={isAuthorized}
          toggleAuth={this.toggleAuth}
          {...this.props}
        />
      );
    }
  };
};

export default WithAuth;
