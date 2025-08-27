import { Component } from "react";
import { Input, FormBtn } from "./Styles/Filter";

export class TodoEditor extends Component {
  state = {
    textValue: "",
  };

  handlechange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.textValue.trim() ==='') {
      return
    }
    this.props.onSubmit(this.state.textValue);
    this.setState({
      textValue: ''
    })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <Input
          type="text"
          value={this.state.textValue}
          onChange={this.handlechange}
          placeholder="Нове завдання"
        />
        <FormBtn type="submit">Add</FormBtn>
      </form>
    );
  }
}
