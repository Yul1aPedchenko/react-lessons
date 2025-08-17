import { Component } from "react";
import { Sticker } from "./Sticker";
import stickersArr from "../../bd/stickers.json";
import { StickerListWrapper } from "./Styles/StickerList";

export class StickerList extends Component {
  state = {
    stickers: stickersArr,
  };

  render() {
    return (
      <>
        <StickerListWrapper
          onClick={(e) => {
            if (e.target.tagName !== "IMG") return;
            const curLabel = e.target.dataset.label;
            const selectedSticker = this.state.stickers.find((sticker) => {
              return sticker.label === curLabel;
            });
            this.props.onSelect(selectedSticker);
          }}
        >
          {this.state.stickers.map((sticker, ind) => {
            return (
              <Sticker
                key={ind}
                imgSrc={sticker.img}
                label={sticker.label}
              ></Sticker>
            );
          })}
        </StickerListWrapper>
      </>
    );
  }
}
