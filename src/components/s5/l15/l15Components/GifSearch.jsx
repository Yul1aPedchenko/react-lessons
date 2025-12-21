import { Component } from "react";
import {
  SearchWrapper,
  SearchForm,
  SearchInput,
  SearchButton,
} from "../Styles/GifSearch.js";

export class GifSearch extends Component {
  state = {
    input: "",
  };

  handleChange = (e) => {
    this.setState({input: e.target.value});
  };
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.input.trim()) {
        this.props.onSearch(this.state.input)
    }
  }

  render() {
    return (
      <SearchWrapper>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Enter keyword"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <SearchButton type="submit">Search</SearchButton>
        </SearchForm>
      </SearchWrapper>
    );
  }
}
