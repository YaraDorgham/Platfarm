import React, { useState } from "react";
import LoginLeftSideBar from "./loginLeftSideBar";
import loginImg from "../images/LoginImg.png";
import "../css/login.css";
import Logo from "../images/logo.png";
import LeftSideForget from "./LeftSideForget";
import LeftSideRetrieve from "./LeftSideRetrieve";
import LeftSideContactUs from "./LeftSideContactUs";
const Login = () => {
  const [type, setType] = useState("login");
  return (
    <div style={{ display: "flex", maxHeight: "100vh" }}>
      <div style={{ flex: 1, marginLeft: "2%" }}>
        <div style={{ marginTop: "9.3%" }}>
          <img
            className="loginimg"
            src={Logo}
            style={{ width: "190px", height: "59px" }}
          ></img>
          <label
            style={{
              marginLeft: "20%",
              color: "#BF5239",
              fontSize: "28px",
              fontWeight: "800",
              fontFamily: "Adobe Arabic",
            }}
          >
            العربيه
          </label>
        </div>
        {type === "login" ? (
          <LoginLeftSideBar setType={setType} />
        ) : type === "forget" ? (
          <LeftSideForget setType={setType} />
        ) : type === "retrieve" ? (
          <LeftSideRetrieve setType={setType} />
        ) : type === "contact" ? (
          <LeftSideContactUs setType={setType} />
        ) : null}
      </div>
      <img className="loginimg" src={loginImg} style={{ flex: 2.5 }}></img>
    </div>
  );
};

export default Login;
