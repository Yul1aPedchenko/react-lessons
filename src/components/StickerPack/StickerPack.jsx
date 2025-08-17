import { Component } from "react";
import { StickerList } from "./StickerList";
import { Choice } from "./Choice";
import { StickerPackWrapper } from "./Styles/StickerPack";

export class StickerPack extends Component {
  state = {
    selectedSticker: null,
  };

  handleSelect = (label) => {
    this.setState({ selectedSticker: label });
  };

  render() {
    return (
      <StickerPackWrapper>
        <Choice selectedSticker={this.state.selectedSticker} />
        <StickerList onSelect={this.handleSelect} />
      </StickerPackWrapper>
    );
  }
}
