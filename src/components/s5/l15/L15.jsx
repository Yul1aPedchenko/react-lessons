import { Component } from "react";
import { GifSearch } from "./l15Components/GifSearch";
import { GifList } from "./l15Components/GifList";
import { Wrapper } from "./Styles/L15";

export class L15 extends Component {
    state = {
        keyword: 'cats',
    }

    handleSearch = (newKeyword) => {
        this.setState({keyword: newKeyword});
    }
    render() {
        return (
            <Wrapper>
                <h2>Gif Search</h2>
                <div>
                    <GifSearch onSearch={this.handleSearch}></GifSearch>
                    <GifList keyword={this.state.keyword}></GifList>
                </div>
            </Wrapper>
        )
    }
}