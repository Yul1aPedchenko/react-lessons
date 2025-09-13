import { Component } from "react";

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
  };
  toggleModal= () => {
    this.setState({modalIsOpened: !this.state.modalIsOpened});
  }
  componentDidMount = () => {
    console.log("Component has mounted!");
    document.addEventListener("keydown", this.handleEscape);
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };
  componentDidUpdate = (prevProps, prevState) => {
    if (prevState.clicked !== this.state.clicked) {
      const randomIndex = Math.floor(Math.random() * this.state.content.length);
      const [headline, text] = this.state.content[randomIndex];
      this.setState({
        modalHeadline: headline,
        modalText: text,
      });
    }
  }
  handleEscape = (event) => {
    if (event.key === "Escape") {
      this.setState({ modalIsOpened: false });
    }
  };

  componentWillUnmount = () => {
    document.removeEventListener("keydown", this.handleEscape);
  }

  render() {
    const { modalIsOpened, modalHeadline, modalText } = this.state;
    return (
      <>
      <button onClick={this.toggleModal}>Open modal</button>
        {modalIsOpened && (
          <div>
            <div>
              <h2>{modalHeadline}</h2>
              <p>{modalText}</p>
              <button onClick={this.handleClick}>Click here</button>
              <button onClick={this.toggleModal}>Close modal</button>
            </div>
          </div>
        )}
      </>
    );
  }
}
