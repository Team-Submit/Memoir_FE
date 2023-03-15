import styled from "styled-components";
import { Color } from "../../interface";

export const Warpper = styled.div`
  width: 100%;
  height: 28%;
  & > h1 {
    padding-top: 50px;
  }
`;

export const Btn = styled.button`    
    font-weight: bold;
    font-size:16px;
    margin: 20px 15px 0 0;
    padding: 10px 10px;
    border-radius: 8px;
    border: none;
    background-color: ${Color.HeaderInputBorder};
`;

