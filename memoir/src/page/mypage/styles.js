import styled from "styled-components";
import { Color } from "../../interface";

export const Flex = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 90%;
`;

export const MyPageWarpper = styled.div`
  width: 1024px;
`;

export const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${Color.HeaderInputBorder};
`;
