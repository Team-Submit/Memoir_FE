import { Link, useNavigate } from "react-router-dom";
import { getAccessToken } from "../../config/constants.js";
import { useEffect, useState } from "react";
import * as _ from "./styles.js";

const Header = () => {
  const navigate = useNavigate();
  const token = getAccessToken();
  const [loginInput, setLoginInput] = useState([]);
  useEffect(()=>{
    token === "" ? setLoginInput("로그인") : setLoginInput("글쓰기")
  })
  return (
    <_.Header>
      <_.HeaderArea>
        <div>
          <img src="/images/Logo.png" />
          <Link to="/">회고록</Link>
        </div>
        <button
          onClick={function () {
            navigate("/login");
          }}
        >
          {loginInput}
        </button>
      </_.HeaderArea>
    </_.Header>
  );
};

export default Header;
