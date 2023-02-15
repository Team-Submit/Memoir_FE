import styled from "styled-components";
import { Color, MainColor } from "../../interface";

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
  background-color: red;
  display: flex;
  justify-content: space-between;
  align-items: center;

& > div{
    width: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 200px;
}

  & > img {
    width: 130px;
  }

  & > Button{
    background-color: ${Color.HeaderInput};
    border: 1px solid ${Color.HeaderInputBorder};
    font-weight: bold;
    font-size: 18px;
    width: 100px;
    height: 40px;
    border-radius: 8px;
    &:hover{
        background-color: ${MainColor};
        color: white;
        transition: all 0.3s
    }
  }
`;
