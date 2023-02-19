import styled from "styled-components";
import { Color, MainColor } from "../../interface";

export const MainWarpper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Memoir_List = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 100px;
  width: 1050px;
  gap: 20px;
`;

export const Memoir_Card = styled.div`
  width: 300px;
  height: 160px;
  background-color: ${Color.HeaderColor};
  border: 1px solid ${Color.HeaderInputBorder};
  border-radius: 10px;
  padding: 15px;
  &:hover {
    box-shadow: 0 0 5px ${MainColor};
  }
`;

export const Memoir_Title = styled.div`
  font-size: 18px;
  font-weight: bold;
`;

export const Memoir_Content = styled.div`
  font-size: 14px;
  color: ${Color.MainFont};
  margin-top: 5px;
`;

export const Memoir_Flex = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 50px;
  & > div {
    font-size: 16px;
    font-weight: bold;
    color: ${Color.MainFontDW};
  }
`;
