import styled from "styled-components";

export const Points = styled.span`
  display: inline-block;
  font-size: 12px;
  line-height: 1.2;
  margin-left: 5px;
`;

export const ImgContainer = styled.div`
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  background: #ddd;
  z-index: 9;
  border: 2px solid #ffffff;
`;

export const Img = styled.img.attrs((props) => ({
  alt: props.alt,
  src: props.src,
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
