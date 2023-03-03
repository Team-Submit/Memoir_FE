import styled from "styled-components";
import { Color, MainColor } from "../../interface";
import { Link } from "react-router-dom";

export const Header = styled.div`
  height: 64px;
  background-color: ${Color.HeaderColor};
  border-bottom: ${Color.HeaderLine};
  display: flex;
  justify-content: center;
`;

export const HeaderArea = styled.div`
  width: 1024px;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  & > img {
    width: 130px;
  }

  & > button {
    background-color: ${Color.HeaderInput};
    border: 1px solid ${Color.HeaderInputBorder};
    font-weight: bold;
    font-size: 16px;
    width: 90px;
    height: 40px;
    border-radius: 8px;
    &:hover {
      background-color: ${MainColor};
      color: white;
      transition: all 0.3s;
    }
  }
`;

export const SLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  color: ${Color.HeaderLine};
  text-decoration: none;
  &:hover {
    color: ${MainColor};
    transition: all 0.3s;
  }
`;
