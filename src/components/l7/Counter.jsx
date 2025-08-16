import { Component } from "react";

export class Counter extends Component {
  // constructor(step){
  //     this.step = step
  // }

  //! in Reat we can dont create a "constructor", it is made by automaticaly
  state = {
    num: this.props.value,
    test: "test",
  };

  add = () => {
    //? this type of changing inside state doesnt work in react because we need to use setState
    // return (this.state.num += 1);
    // console.log(this.state.num)
    // this.setState({ num: +1 }); 
    //? this type of changing state works if we want to change the value without connect to the previous value
    //? if we want to renew state by using the previous value, we'll use calback like an argument in setState

    this.setState((prevState) => {
        return {
            num: prevState.num + 1,
        }
    })
  };
  minus = () => {
    this.setState((prevState) => {
        return {
            num: prevState.num - 1,
        }
    })
  };
  render() {
    //  console.log(this.props.step)
    return (
      <div>
        <span>{this.state.num}</span>
        <button onClick={this.add}>+</button>
        <button onClick={this.minus}>-</button>
      </div>
    );
  }
}
