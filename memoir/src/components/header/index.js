import { Outlet, useNavigate, useLocation, Link } from "react-router-dom";
import { getAccessToken } from "../../config/constants.js";
import { useEffect, useState } from "react";
import * as _ from "./styles.js";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = getAccessToken();
  const [loginInput, setLoginInput] = useState([]);
  const [mypage, setMypage] = useState([]);
  const [write, setWrite] = useState([]);
  useEffect(() => {
    token === "" ? setLoginInput("로그인") : setLoginInput("글쓰기");
    token === "" ? setMypage("") : setMypage("마이페이지");
    token === "" ? setWrite("login") : setWrite("registration");
  });

  const size = {
    width: mypage === "" ? "200px" : "300px",
  };

  const fontColor1 = {
    color: location.pathname === "/" ? "#4F4EED" : "",
  };

  const fontColor2 = {
    color: location.pathname === "/mypage" ? "#4F4EED" : "",
  };

  return (
    <>
      <_.Header>
        <_.HeaderArea>
          <div style={size}>
            <img src="/images/Logo.png" />
            <_.SLink to="/" style={fontColor1}>회고록</_.SLink>
            <_.SLink to="/mypage" style={fontColor2}>{mypage}</_.SLink>
          </div>
          <button
            onClick={function () {
              token === "" ? navigate("login") : navigate("write")
            }}
          >
            {loginInput}
          </button>
        </_.HeaderArea>
      </_.Header>
      <Outlet />
    </>
  );
};

export default Header;
