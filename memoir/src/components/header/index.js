import { Outlet, useNavigate } from "react-router-dom";
import { getAccessToken } from "../../config/constants.js";
import { useEffect, useState } from "react";
import * as _ from "./styles.js";
import styled from "styled-components";

const Header = () => {
  const navigate = useNavigate();
  const token = getAccessToken();
  const [loginInput, setLoginInput] = useState([]);
  const [mypage, setMypage] = useState([]);
  useEffect(() => {
    token === "" ? setLoginInput("로그인") : setLoginInput("글쓰기");
    token === "" ? setMypage("") : setMypage("마이페이지");
  });

  const size = {
    width: mypage === "" ? "200px" : "300px"
  }

  return (
    <>
      <_.Header>
        <_.HeaderArea>
          <div style={size}>
            <img src="/images/Logo.png" />
            <_.SLink to="/">회고록</_.SLink>
            <_.SLink to="/mypage">{mypage}</_.SLink>
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
      <Outlet />
    </>
  );
};

export default Header;
