import { Component } from "react";
import { Container, Title, Link } from "./Style/MainInfo";

export class MainInfo extends Component {
  render() {
    return (
      <Container>
        <Title>
          На цьому сайті ви знайдете практику в такій послідовності:
          <Link href="#l12">Життєвий цикл</Link>,
          <Link href="#l10">Todo List</Link>,
          <Link href="#stickerPack">StickerPack</Link>
        </Title>
      </Container>
    );
  }
}
