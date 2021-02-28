import React, { Component } from "react";

export default class Tab extends Component {
  state = {
    cur: 0,
  };
  render() {
    const { arr } = this.props;
    return (
      <div className="tab-control">
        {arr.map((item, index) => (
          <div
            className={"tab-item " + (index === this.state.cur ? "active" : "")}
            key={index}
            onClick={e => this.itemClick(index)}
          >
            <span>{item}</span>
          </div>
        ))}
      </div>
    );
  }
  itemClick (index) {
      this.setState({
          cur: index
      })
      this.props.tabClick(index);
  }
}
