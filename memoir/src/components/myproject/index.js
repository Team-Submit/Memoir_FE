import * as _ from "./styles";

export default function MyProject() {
  const tests = [
    {
      id: 1,
      title: "프로젝트 디자인을 하루만에?",
      content:
        "프로젝트 디자인을 하루만에 끝내버렸다. 어쩌면 나 멘토 선배님에게 칭찬을 받을 수 있을지도...",
      createdAt: "2022-06-14",
      writer: "김박이름",
    },
    {
      id: 2,
      title: "후 이제 방학도 곧 끝난다....",
      content: "한게 없는 것 같은데 2학년 생활은 어떻게 될까",
      createdAt: "2023-02-10",
      writer: "어썸드래곤",
    },
    {
        id: 2,
        title: "후 이제 방학도 곧 끝난다....",
        content: "한게 없는 것 같은데 2학년 생활은 어떻게 될까난 모르겠다난 모르겠다난 모르겠다난 모르겠다난 모르겠다난 모르겠다난 모르겠다난 모르겠다",
        createdAt: "2023-02-10",
        writer: "어썸드래곤",
      },
  ];
  return (
    <_.MyProjectWarpper>
      <h1>내가 쓴 글</h1>
      <_.ProjectContainer>
        {tests.map(function (project, index) {
          return( <_.Project>
            <_.ProjectTitle>{project.title}</_.ProjectTitle>
            <_.ProjectContent>{project.content.substring(0, 70)+"..."}</_.ProjectContent>
            <_.Flex>
                <_.At>{project.createdAt}</_.At>
                <_.Writer>{project.writer}</_.Writer>
            </_.Flex>
          </_.Project>);
        })} 
      </_.ProjectContainer>
    </_.MyProjectWarpper>
  );
}
