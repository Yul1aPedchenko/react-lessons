import styled from "styled-components";

export const StickerWrapper = styled.div`
  display: inline-block;
  margin: 15px;
  cursor: pointer;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  border-radius: 12px;
  overflow: hidden;
  background-color: #f7f7f7;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const StickerImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
  padding: 10px;
`;
