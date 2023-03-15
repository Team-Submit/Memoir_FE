import * as _ from "./styles";

export default function Information(){
    return(
        <_.Warpper>
            <h1>김박이름</h1>
            <h2>kimprknme6</h2>
            <p>반가워요 저는 프로필 설명을 쓰고 있어요</p>
            <_.Btn>내 정보 수정</_.Btn>
            <_.Btn>비밀번호 변경</_.Btn>
            <_.Btn>로그아웃</_.Btn>
        </_.Warpper>
    );
}