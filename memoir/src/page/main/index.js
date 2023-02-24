import * as _ from "./styles.js";
import { useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();

  const tests = [{
    id: 1,
    title: "프로젝트 디자인을 하루만에?",
    content:
      "프로젝트 디자인을 하루만에 끝내버렸다. 어쩌면 나 멘토 선배님에게 칭찬을 받을 수 있을지도...",
    createdAt: "2022-06-14",
    writer: "김박이름",
  },{
    id: 2,
    title: "후 이제 방학도 곧 끝난다....",
    content:
      "한게 없는 것 같은데 2학년 생활은 어떻게 될까....",
    createdAt: "2023-02-10",
    writer: "어썸드래곤",
  }];

  return (
    <_.MainWarpper>
      <_.Memoir_List>
        {tests.map(function (test, index) {
          return (
            <_.Memoir_Card
              onClick={function () {
                navigate("/memoirdetail");
              }}
            >
              <_.Memoir_Title>{test.title}</_.Memoir_Title>
              <_.Memoir_Content>{test.content}</_.Memoir_Content>
              <_.Memoir_Flex>
                <div>{test.createdAt}</div>
                <div>{test.writer}</div>
              </_.Memoir_Flex>
            </_.Memoir_Card>
          );
        })}
      </_.Memoir_List>
    </_.MainWarpper>
  );
}

export default Main;
