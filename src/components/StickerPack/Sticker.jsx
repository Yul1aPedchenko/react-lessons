import { Component } from "react";
import { StickerWrapper, StickerImage } from "./Styles/Sticker";
export class Sticker extends Component {
  render() {
    const { imgSrc, label } = this.props;

    return (
      <StickerWrapper>
        <StickerImage src={imgSrc} alt={label} data-label={label} />
      </StickerWrapper>
    );
  }
}
