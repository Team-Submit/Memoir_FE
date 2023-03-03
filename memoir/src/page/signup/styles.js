import styled from "styled-components";
import { Color, MainColor } from "../../interface";


export const SignupFlex = styled.div`
  height: 85%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SignupWarpper = styled.div`
  background-color: ${Color.HeaderInputBorder};
  width: 400px;
  height: 500px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1{
    margin: 30px 0 30px 0;
  }
`;

export const SignupInput = styled.input`
  width: 350px;
  height: 50px;
  margin-bottom: 15px;
  padding-left: 10px;
  padding-top: 3px;
  border: 1px solid ${Color.HeaderInputBorder};
  border-radius: 8px;
  outline: none;
  &::placeholder {
    font-size: 18px;
    font-weight: bold;
  }
  font-size: 16px;
`;

export const SignupBtn = styled.button`
  width: 350px;
  height: 50px;
  font-size: 18px;
  font-weight: bold;
  border-radius: 8px;
  margin-top: 30px;
  background-color: ${MainColor};
  border: transparent;
  color: white;
`;