import React, { useState, useEffect } from "react";
import { Checkbox, Icon, InputGroup } from "@blueprintjs/core";
import "@blueprintjs/core/lib/css/blueprint.css";
import { useHistory } from "react-router-dom";
import Logo from "../images/logo.png";

const LoginLeftSideBar = ({ setType }) => {
  const [checked, setChecked] = useState(false);
  const history = useHistory();

  return (
    <div>
      <div style={{ marginTop: "35%" }}>
        <label
          style={{
            color: "#878787",
            fontSize: "25px",
            fontWeight: "400",
          }}
        >
          Welcome,
        </label>
      </div>
      <div style={{ marginTop: "2px" }}>
        <label
          style={{
            color: "#3C3C3C",
            fontSize: "25px",
            fontWeight: "700",
            fontWeight: "700",
          }}
        >
          Login to Continue
        </label>
      </div>
      <div style={{ marginTop: "23px" }}>
        <InputGroup
          className="inp"
          leftIcon="person"
          type="text"
          placeholder="Username or phone number"
          style={{
            backgroundColor: "#F0EAE4",
            borderRadius: "10px",
            border: "0px",
            width: "85%",
            height: "40px",
          }}
        ></InputGroup>
      </div>
      <div style={{ marginTop: "10px" }}>
        <InputGroup
          className="inp"
          leftIcon="lock"
          type="text"
          placeholder="Password"
          style={{
            backgroundColor: "#F0EAE4",
            borderRadius: "10px",
            border: "0px",
            width: "85%",
            height: "40px",
            paddingLeft: "3%",
          }}
        ></InputGroup>
      </div>
      <div style={{ marginTop: "5%" }}>
        <Checkbox className="lbl" checked={checked} label="Remember Me" />
      </div>
      <div style={{ marginTop: "14px" }}>
        <button
          style={{
            backgroundColor: "#547445",
            borderRadius: "6px",
            border: "0px",
            width: "35%",
            height: "44px",
            color: "#FFFFFF",
            fontWeight: "700",
          }}
        >
          Login
        </button>
        <label
          className="lbl"
          style={{
            marginLeft: "17%",
            color: "#BF5239",
            fontSize: "15px",
            fontWeight: "700",
          }}
          onClick={() => setType("forget")}
        >
          Forget password?
        </label>
      </div>

      <div style={{ marginTop: "44px", marginLeft: "17%" }}>
        <label
          className="lbl"
          style={{ color: "#BF5239", fontSize: "15px", fontWeight: "700" }}
          onClick={() => {
            setType("contact");
          }}
        >
          Don't have an account?
        </label>
      </div>
    </div>
  );
};

export default LoginLeftSideBar;
