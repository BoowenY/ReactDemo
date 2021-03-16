import React, { PureComponent } from "react";
import store from "../store";
export function connect(mapStateToProps, mapDispatchToProps) {
  return function enhanceHOC(Cmp) {
    return class extends PureComponent {
      render() {
        return (
          <Cmp
            {...this.props}
            {...mapStateToProps(store.getState())}
            {...mapDispatchToProps(store.dispatch)}
          />
        );
      }
    };
  };
}
