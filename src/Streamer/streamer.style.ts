import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px;
  border-bottom: 1px solid #ddd;
  background: #fff;
  position: absolute;
  left: 50px;
  width: calc(100% - 100px);
  transition: top 0.8s ease-in-out;
  background: #f5f2f4;
  :hover {
    background: #6192e4;
  }
`;

export const Details = styled.div`
  position: relative;
  z-index: 9;
  display: flex;
  align-items: center;
`;

export const Points = styled.div`
  display: flex;
  align-items: baseline;
`;

export const DisplayName = styled.h4`
  font-size: 16px;
  line-height: 1.2;
  margin: 0 0 0 10px;
  font-weight: 400;
`;

export const Score = styled.h5`
  font-size: 13px;
  line-height: 1.2;
  margin: 0;
  font-weight: normal;
`;

export const User = styled.div`
  position: relative;
  z-index: 9;
`;

export const Serial = styled.span`
background: ${(props: {background: string}) => props.background};
display: inline-block;
text-align: center;
height: 20px;
width: 20px;
border-radius: 50%;
margin: auto 0;
margin-right: 5px;
line-height: 19px;
font-size: 12px;
color: #fff;
`;

export const Container = styled.div`
  max-width: 86%;
  margin: auto;
  background-color: #f5f2f4;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  position: relative;
  height: 450px;
  padding: 0 50px;
  border-radius: 15px;
`;
