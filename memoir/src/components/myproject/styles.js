import styled from "styled-components";
import { Color } from "../../interface";

export const MyProjectWarpper = styled.div`
  width: 100%;
  height: 60%;
  margin-top: 30px;
`;

export const ProjectContainer = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 30px;
    overflow: auto;
    ::-webkit-scrollbar{
        display: none;
    }
`;

export const Project = styled.div`
  width: 300px;
  height: 180px;
  background-color: ${Color.HeaderInputBorder};
  border-radius: 10px;
  padding: 15px 10px;
`;

export const ProjectTitle = styled.div`
    font-size:20px;
    font-weight: bold;
`;


export const ProjectContent = styled.div`
  font-size: 16px;
  color: ${Color.MainFont};
  height: 65%;
`;

export const Flex = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  font-weight: bold;
  opacity: 0.6;
`;

export const At = styled.div`

`;

export const Writer = styled.div`

`;