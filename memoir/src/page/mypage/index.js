import Information from "../../components/infromation";
import MyProject from "../../components/myproject";
import * as _ from "./styles";

export default function Mypage() {
  return (
    <_.Flex>
      <_.MyPageWarpper>
        <Information/>
        <_.Line/>
        <MyProject/>
      </_.MyPageWarpper>
    </_.Flex>
  );
}
