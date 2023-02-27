import * as _ from "./styles.js";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <_.LoginFlex>
      <_.LoginWarpper>
        <h1>로그인</h1>
        <p>로그인해서 Memoir의 모든 기능을 사용하세요</p>
        <_.LoginInput placeholder="아이디" />
        <_.LoginInput placeholder="비밀번호" />
        <_.LoginBtn
          onClick={function () {
            navigate("/");
          }}
        >
          로그인
        </_.LoginBtn>
        <_.SignupBtn
          onClick={function () {
            navigate("/signup");
          }}
        >
          회원가입
        </_.SignupBtn>
      </_.LoginWarpper>
    </_.LoginFlex>
  );
}
