import { InputGroup } from "@blueprintjs/core";
import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
const LeftSideForget = ({ setType }) => {
  const history = useHistory();

  return (
    <div>
      <div style={{ marginTop: "35%" }}>
        <label
          style={{
            color: "#3C3C3C",
            fontSize: "25px",
            fontWeight: "700",
          }}
        >
          Forget Password
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

      <div style={{ marginTop: "14px" }}>
        <button
          style={{
            backgroundColor: "#547445",
            borderRadius: "6px",
            border: "0px",
            width: "40%",
            height: "44px",
            color: "#FFFFFF",
            fontWeight: "700",
          }}
          onClick={() => setType("retrieve")}
        >
          Retrieve Password
        </button>
      </div>
    </div>
  );
};

export default LeftSideForget;
