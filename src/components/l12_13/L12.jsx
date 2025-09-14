import { Component } from "react";
import { Modal } from "./Modal";
import { Wrapper, Button } from "./Style/Modal";

export class L12 extends Component {
  state = { showModal: false };

  toggleModal = () => {
    this.setState((prev) => ({ showModal: !prev.showModal }));
  };

  render() {
    return (
      <Wrapper>
        <Button onClick={this.toggleModal}>Open Modal</Button>
        {this.state.showModal && <Modal onClose={this.toggleModal} />}
      </Wrapper>
    );
  }
}
