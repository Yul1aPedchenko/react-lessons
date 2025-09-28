import { Component } from "react";
import {
  Wrapper,
  GifGrid,
  GifItem,
  ButtonGroup,
  Button,
} from "../Styles/GifList.js";

const API_KEY = process.env.REACT_APP_TENOR_API_KEY;
const BASE_URL = "https://tenor.googleapis.com/v2/search";

export class GifList extends Component {
  state = {
    gifs: [],
    loading: true,
    nextPos: "",
    prevStack: [],
  };

  async fetchGifs(pos = "") {
    this.setState({ loading: true });

    const { keyword } = this.props;

    try {
      const r = await fetch(
        `${BASE_URL}?q=${keyword}&key=${API_KEY}&limit=8&pos=${pos}`
      );
      const data = await r.json();
      console.log(data);
      this.setState((prev) => ({
        gifs: data.results,
        loading: false,
        nextPos: data.next || "",
        prevStack: pos ? [...prev.prevStack, pos] : [],
      }));
    } catch (error) {
      console.error(error);
      this.setState({ loading: false });
    }
  }

  componentDidMount() {
    this.fetchGifs();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.keyword !== this.props.keyword) {
      this.fetchGifs("");
    }
  }

  handleNext = () => {
    if (this.state.nextPos) {
      this.fetchGifs(this.state.nextPos);
    }
  };

  handlePrev = () => {
    const prevStack = [...this.state.prevStack];
    prevStack.pop();
    const lastPos = prevStack.pop() || "";
    this.setState({ prevStack }, () => {
      this.fetchGifs(lastPos);
    });
  };
  render() {
    const { gifs, loading } = this.state;
    return (
      <Wrapper>
        {loading ? (
          <p style={{ color: "#fff"}}>Loading...</p>
        ) : (
          <GifGrid>
            {gifs && gifs.length > 0 ? (
              gifs.map((gif) => (
                <GifItem key={gif.id}>
                  <img
                    src={gif.media_formats.gif.url}
                    alt={gif.content_description || "gif"}
                  />
                  <h3>{gif.content_description || "No description"}</h3>
                </GifItem>
              ))
            ) : (
              <p style={{ color: "#fff" }}>No GIFs found</p>
            )}
          </GifGrid>
        )}

        <ButtonGroup>
          <Button onClick={this.handlePrev}>Prev</Button>
          <Button onClick={this.handleNext}>Next</Button>
        </ButtonGroup>
      </Wrapper>
    );
  }
}
