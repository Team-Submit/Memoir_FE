import * as _ from "./styles";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  return (
    <_.SignupFlex>
      <_.SignupWarpper>
        <h1>회원가입</h1>
        <_.SignupInput placeholder="이름" />
        <_.SignupInput placeholder="아이디" />
        <_.SignupInput placeholder="비밀번호" />
        <_.SignupInput placeholder="비밀번호 확인" />
        <_.SignupBtn
          onClick={function () {
            navigate("/login");
          }}
        >
          회원가입
        </_.SignupBtn>
      </_.SignupWarpper>
    </_.SignupFlex>
  );
}
