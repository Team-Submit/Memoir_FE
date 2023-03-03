import styled from "styled-components";
import { Color, MainColor } from "../../interface";

export const LoginFlex = styled.div`
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginWarpper = styled.div`
  background-color: ${Color.HeaderInputBorder};
  width: 400px;
  height: 450px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  & > h1 {
    margin: 30px 0 5px 0;
  }

  & > p {
    margin-bottom: 50px;
  }
`;

export const LoginInput = styled.input`
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

export const LoginBtn = styled.button`
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

export const SignupBtn = styled.button`
  width: 350px;
  height: 50px;
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  border: 1px solid transparent;
  border-radius: 8px;
  margin-top: 10px;
  color: ${Color.LoginInputFont};
  &:hover {
    border: 4px solid ${Color.HeaderInputBorder};
    font-size: 20px;
    transition: all 0.3s;
  }
`;
