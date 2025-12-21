import { Component } from "react";
import {ChoiceWrapper, ChoiceText, Placeholder} from './Styles/Choice'
export class Choice extends Component {
  render() {
    const { selectedSticker } = this.props;
    return (
      <ChoiceWrapper>
        {selectedSticker === null ? (
          <Placeholder>Choose one of stickers</Placeholder>
        ) : (
          <div>
            <img src={selectedSticker.img} alt={selectedSticker.label} />
            <ChoiceText>{selectedSticker.label}</ChoiceText>
          </div>
        )}
      </ChoiceWrapper>
    );
  }
}
