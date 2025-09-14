import { Component } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { Wrapper, Overlay, ModalBox, Title, Text, Button } from "./Style/Modal";

export class Modal extends Component {
  state = {
    modalIsOpened: false,
    modalHeadline: "Sorry, this modal is empty :((",
    modalText: "Click the button to open main content",
    content: [
      ["Oops!", "Welcome to the content!"],
      ["Note", "Here’s the main section"],
      ["Heads up!", "Enjoy exploring!"],
      ["Hello!", "Now you see the content"],
      ["Info", "This is the main page"],
      ["Alert!", "Content unlocked"],
      ["Hey!", "Have fun inside"],
      ["Good job!", "Main info is here"],
      ["Nice!", "You found it!"],
      ["Done!", "All set, let’s start"],
    ],
    clicked: false,
    seconds: 0, 
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleEscape);
    this.startTimer();
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleEscape);
    this.stopTimer();
    console.log("ComponentWillUnmount was used");
  }

  handleClick = () => {
    const randomIndex = Math.floor(Math.random() * this.state.content.length);
    const [headline, text] = this.state.content[randomIndex];
    this.setState({ modalHeadline: headline, modalText: text });
  };

  handleEscape = (event) => {
    if (event.key === "Escape") {
      this.props.onClose();
    }
  };

  startTimer = () => {
    this.interval = setInterval(() => {
      this.setState((prev) => ({ seconds: prev.seconds + 1 }));
    }, 1000);
  };

  stopTimer = () => {
    clearInterval(this.interval);
    console.log("Timer was stopped");
  };

  render() {
    const { modalHeadline, modalText, seconds } = this.state;
    const { onClose } = this.props;

    return (
      <Wrapper>
        <Overlay>
          <ModalBox>
            <Title>{modalHeadline}</Title>
            <Text>{modalText}</Text>
            <Text> You are here: {seconds} sec</Text>
            <Button onClick={this.handleClick}>Click here</Button>
            <Button onClick={onClose}>
              <RiCloseCircleLine />
            </Button>
          </ModalBox>
        </Overlay>
      </Wrapper>
    );
  }
}
