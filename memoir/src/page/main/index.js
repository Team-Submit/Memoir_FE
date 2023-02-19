import * as _ from "./styles.js";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <_.MainWarpper>
      <_.Memoir_List>
        <_.Memoir_Card onClick={function(){navigate("/memoirdetail");}}>
          <_.Memoir_Title>프로젝트 디자인을 하루만에?</_.Memoir_Title>
          <_.Memoir_Content>
            프로젝트 디자인을 하루만에 끝내버렸다. 어쩌면 나 멘토 선배님에게
            칭찬을 받을 수 있을지도...
          </_.Memoir_Content>
          <_.Memoir_Flex>
            <div>2022-06-14</div>
            <div>김박이름</div>
          </_.Memoir_Flex>
        </_.Memoir_Card>
      </_.Memoir_List>
    </_.MainWarpper>
  );
}

export default Main;
