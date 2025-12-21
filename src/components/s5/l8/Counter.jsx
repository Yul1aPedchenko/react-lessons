import { Component } from "react";

export class Counter extends Component {
  // constructor(step){
  //     this.step = step
  // }

  //! in Reat we can dont create a "constructor", it is made by automaticaly
  // state = {
  //   num: this.props.value,
  //   test: "test",
  // };

  // add = () => {
  //   //? this type of changing inside state doesnt work in react because we need to use setState
  //   // return (this.state.num += 1);
  //   // console.log(this.state.num)
  //   // this.setState({ num: +1 });
  //   //? this type of changing state works if we want to change the value without connect to the previous value
  //   //? if we want to renew state by using the previous value, we'll use calback like an argument in setState

  //   this.setState((prevState) => {
  //       return {
  //           num: prevState.num + 1,
  //       }
  //   })
  // };
  // minus = () => {
  //   this.setState((prevState) => {
  //       return {
  //           num: prevState.num - 1,
  //       }
  //   })
  // };
  render() {
    //  console.log(this.props.step)
    const { add, minus, num } = this.props;
    // console.log(this.props.test('12'))

    return (
      <div>
        <span>{num}</span>
        <button onClick={add}>+</button>
        <button onClick={minus}>-</button>

        <input
          type="text"
          onChange={(e) => {
            return this.props.test(e.target.value);
          }}
        />
      </div>
    );
  }
}
