import { Component } from "react";

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
        <input
          type="text"
          value={this.state.textValue}
          onChange={this.handlechange}
          placeholder="Нове завдання"
        />
        <button type="submit">Add</button>
      </form>
    );
  }
}
