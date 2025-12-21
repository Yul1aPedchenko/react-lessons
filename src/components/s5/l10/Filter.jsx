import { Component } from "react";
import { Input } from "./Styles/Filter";

export class Filter extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };

  render() {
    const { value } = this.props;
    return (
      <Input
        type="text"
        value={value}
        onChange={this.handleChange}
        placeholder="Відфільтруйте свої завдання"
      />
    );
  }
}
