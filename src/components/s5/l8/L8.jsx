import { Counter } from "./Counter";
import { Component } from "react";

// export const L7 = () => {
export class L8 extends Component {
  state = {
    num: 0,
    mes: "",
  };
  add = () => {
    this.setState((prevState) => {
      return {
        num: prevState.num + 1,
      };
    });
  };
  minus = () => {
    this.setState((prevState) => {
      return {
        num: prevState.num - 1,
      };
    });
  };
  test = (message) => {
    this.setState((prevState) => {
        return {
            mes: message,
        }
    })
  }
  render() {
    console.log(this.state.mes)
    return <Counter test={this.test} num={this.state.num} add={this.add} minus={this.minus}></Counter>;
  }
}
