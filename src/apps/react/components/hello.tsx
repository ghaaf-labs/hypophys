import React from "react";
import Hypophys from "../../../core/core";
import HypophysVue from "../../vue/hypophys";

interface HelloState {
  value: number;
}

export default class Square extends React.Component<any, HelloState> {
  constructor(props: any) {
    super(props);
    this.state = {
      value: 0,
    };

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState((state) => ({
      value: state.value + 1,
    }));
  }

  render() {
    return (
      <>
        <h1>
          Hello from react !! counter : {this.state.value}
          <button onClick={this.onClick}>Click me</button>
        </h1>
      </>
    );
  }
}
