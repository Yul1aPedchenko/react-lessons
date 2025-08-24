import { Component } from "react";

export class Filter extends Component {
  handleChange = (e) => {
    this.props.onChange(e.target.value);
  };
  render() {
    const { value, onChange } = this.props;
    return (
      <div>
        <input
          type="text"
          value={value}
          onChange={this.handleChange}
          placeholder="Відфільтруйте свої завдання"
        />
      </div>
    );
  }
}
